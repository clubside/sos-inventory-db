// index.js

const openDb = require('./db/database.js')
const createTable = require('./db/create-table.js')
const insertRow = require('./db/insert-row.js')
const { tables } = require('./db/definitions.js')

function formatRuntime(ms) {
	const totalSeconds = Math.floor(ms / 1000)
	const hours = Math.floor(totalSeconds / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60)
	const seconds = totalSeconds % 60
	return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

async function sosApi(url, method, authorization, retries = 5) {
	console.log(url)
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			const res = await fetch(url, {
				method,
				headers: {
					'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
					Accept: '*/*',
					'Accept-Encoding': 'gzip, deflate, br',
					'Content-Type': 'application/x-www-form-urlencoded',
					Host: 'api.sosinventory.com',
					Authorization: authorization
				}
			})

			if (!res.ok) {
				throw new Error(`HTTP ${res.status} ${res.statusText}`)
			}

			return await res.json()
		} catch (err) {
			if (attempt === retries) throw err

			const delay = 250 * attempt
			console.log(`Retry ${attempt}/${retries} after error: ${err.message}`)
			await new Promise(resolve => setTimeout(resolve, delay))
		}
	}
}

async function downloadTable(params, engine, table) {
	// 1. Create table (not transactional)
	const ctResult = await createTable(engine, table)
	if (!ctResult.ok) return ctResult

	const retries = params.retries ?? 5
	let offset = 1

	// 2. Begin transaction for row ingestion
	await engine.begin()

	while (true) {
		const result = await sosApi(
        `https://api.sosinventory.com${table.api.query.endpoint}?start=${offset}&maxresults=200`,
        table.api.query.method,
        params.sosAuthorization,
        retries
		)

		// 1. SOS returned non-ok status
		if (result.status !== 'ok') {
			await engine.rollback()
			return { ok: false, message: result.message || 'SOS API returned non-ok status' }
		}

		// 2. Data must be an array
		if (!Array.isArray(result.data)) {
			await engine.rollback()
			return { ok: false, message: 'SOS API returned invalid data array' }
		}

		// 3. Pagination fields must exist
		if (typeof result.count !== 'number' || typeof result.totalCount !== 'number') {
			await engine.rollback()
			return { ok: false, message: 'SOS API returned invalid pagination fields' }
		}

		// 4. Insert rows
		for (const record of result.data) {
			delete record.keys
			delete record.values

			const irResult = await insertRow(engine, table, record)
			if (!irResult.ok) {
				await engine.rollback()
				return { ok: false, message: irResult }
			}
		}

		offset += result.count
		if (offset > result.totalCount) break
	}

	// 3. Commit if everything succeeded
	await engine.commit()
	return { ok: true }
}

async function handleCategories(engine, table) {
	// 1. Create the categories table
	await createTable(engine, table)

	// 2. Extract distinct category JSON strings from items
	const rows = await engine.query(
		'SELECT DISTINCT category FROM items WHERE category IS NOT NULL',
		[],
		true
	)

	// 3. Insert each category into the categories table
	for (const row of rows) {
		let categoryObj
		try {
			categoryObj = JSON.parse(row.category)
		} catch (err) {
			console.error('Invalid category JSON:', row.category)
			continue
		}

		await insertRow(engine, table, categoryObj)
	}

	// 4. Now update items with categoryId
	const items = await engine.query(
		'SELECT id, category FROM items WHERE category IS NOT NULL',
		[],
		true
	)

	for (const item of items) {
		let categoryObj
		try {
			categoryObj = JSON.parse(item.category)
		} catch (err) {
			console.error('Invalid category JSON:', item.category)
			continue
		}

		// Update items table: set categoryId = categoryObj.id
		await engine.update(
			'items',
			{ categoryId: categoryObj.id },
			{ id: item.id }
		)
	}

	return { ok: true }
}

async function handleItemBoms(params, engine, table) {
	await createTable(engine, table)

	const items = await engine.query('select id from items where type IN (\'Assembly\', \'Item Group\')', [], true)

	const retries = params.retries ?? 5

	for (const item of items) {
		const result = await sosApi(`https://api.sosinventory.com/api/v2/item/${item.id}/bom`, 'GET', params.sosAuthorization, retries)
		// console.log(result)

		if (!result.data) continue

		if (result.data.lines.length === 0) continue

		const lines = result.data.lines

		for (const line of lines) {
			const id = Number(line.lineId)
			delete line.lineId
			const record = {
				id,
				itemId: item.id,
				...line
			}
			// onsole.log({ record })
			await insertRow(engine, table, record)
		}
	}

	return { ok: true }
}

async function downloadSOS(params) {
	if (!params.database.engine) {
		return {
			ok: false,
			message: 'Missing required parameter: params.database.engine',
			error: new Error('params.database.engine is required'),
			extra: null
		}
	}

	if (!params.sosAuthorization) {
		return {
			ok: false,
			message: 'Missing required parameter: params.sosAuthorization',
			error: new Error('params.sosAuthorization is required'),
			extra: null
		}
	}

	const start = Date.now()

	const engine = await openDb(params.database)

	// PASS 1 — reference tables
	const referenceTables = tables.filter(table => table.reference === true)
	for (const table of referenceTables) {
		const result = await downloadTable(params, engine, table)
		if (!result.ok) {
			if (engine.close) await engine.close()
			return {
				ok: false,
				message: `downloadTable failed for ${table.name}`,
				error: result.error || new Error('Unknown downloadTable error'),
				extra: { table: table.name, result }
			}
		}
	}

	// PASS 2 - primary tables
	const primaryTables = tables.filter(table => table.primary === true)
	for (const table of primaryTables) {
		const result = await downloadTable(params, engine, table)
		if (!result.ok) {
			if (engine.close) await engine.close()
			return {
				ok: false,
				message: `downloadTable failed for ${table.name}`,
				error: result.error || new Error('Unknown downloadTable error'),
				extra: { table: table.name, result }
			}
		}
	}

	// PASS 3 — support tables
	const supportTables = tables.filter(table => table.support === true)
	for (const table of supportTables) {
		switch (table.name) {
			case 'categories': {
				const catResult = await handleCategories(engine, table)
				if (!catResult.ok) {
				     if (engine.close) await engine.close()
					return {
						ok: false,
						message: 'handleCategories failed',
						error: catResult.error || new Error('Unknown category handler error'),
						extra: { table: table.name, result: catResult }
					}
				}
				break
			}
			case 'itemBoms': {
				const bomResult = await handleItemBoms(params, engine, table)
				if (!bomResult.ok) {
					if (engine.close) await engine.close()
					return {
						ok: false,
						message: 'handleItemBoms failed',
						error: bomResult.error || new Error('Unknown item BOM handler error'),
						extra: { table: table.name, result: bomResult }
					}
				}
				break
			}
		}
	}

	if (engine.close) await engine.close()

	const runtime = formatRuntime(Date.now() - start)
	return {
		ok: true,
		message: 'downloadSOS completed successfully',
		error: null,
		extra: { runtime }
	}
}

module.exports = downloadSOS
