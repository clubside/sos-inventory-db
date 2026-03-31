// index.js

const openDb = require('./db/database.js')
const createTable = require('./db/create-table.js')
const insertRow = require('./db/insert-row.js')
const { tables } = require('./db/definitions.js')

const testDatabases = {
	sqlite: {
		engine: 'sqlite',
		filename: './db/wdm.db'
	},
	mariadb: {
		engine: 'mariadb',
		host: 'localhost',
		port: 3306,
		user: 'wdm',
		password: 'FuckSh!tC*nt69',
		database: 'wdm'
	},
	postgres: {
		engine: 'postgres',
		host: '192.168.40.204',
		port: 5432,
		user: 'cossocial',
		password: 'bn6hYr%j4s#5QCG',
		database: 'wdm'
	},
	mssql: {
		engine: 'mssql',
		server: 'CLUBDEVSRV',
		port: 1433,
		authentication: {
			type: 'default',
			options: {
				userName: 'sa',
				password: 'FuckSh!tC*nt69'
			}
		},
		options: {
			database: 'wdm',
			encrypt: true,
			trustServerCertificate: true,
			enableArithAbort: true
		}
	}
}

async function sosApi(url, authorization, retries = 5) {
	console.log(url)
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			const res = await fetch(url, {
				method: 'GET',
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
			`https://api.sosinventory.com/api/v2/${table.api}?start=${offset}&maxresults=200`,
			params.sosAuthorization,
			retries
		)

		for (const record of result.data) {
			delete record.keys
			delete record.values

			const irResult = await insertRow(engine, table, record)
			if (!irResult.ok) {
				await engine.rollback()
				return irResult
			}
		}

		offset += result.count
		if (offset > result.totalCount) break
	}

	// 3. Commit if everything succeeded
	await engine.commit()
	return { ok: true }
}

/* async function handleCategories(engine, table) {
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
}

async function handleItemBoms(params, engine, table) {
	await createTable(engine, table)

	const items = await engine.query('select id from items where type IN (\'Assembly\', \'Item Group\')', [], true)

	const retries = params.retries ?? 5

	for (const item of items) {
		const result = await sosApi(`https://api.sosinventory.com/api/v2/item/${item.id}/bom`, params.sosAuthorization, retries)
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
} */

async function downloadSOS(params) {
	if (!params.database.engine) {
		return { ok: false, error: new Error('downloadSOS(params) requires params.database.engine') }
	}

	if (!params.sosAuthorization) {
		return { ok: false, error: new Error('downloadSOS(params) requires params.sosAuthorization') }
	}

	const engine = await openDb(params.database)

	/* PASS 1 — reference tables (preserve for future)
	const referenceTables = tables.filter(table => table.reference === true)
	for (const table of referenceTables) {
		const result = await downloadTable(params, engine, table)
		if (!result.ok) {
			if (engine.close) await engine.close()
			return result
		}
	}
	*/

	const primaryTables = tables.filter(table => table.primary === true)
	for (const table of primaryTables) {
		const result = await downloadTable(params, engine, table)
		if (!result.ok) {
			if (engine.close) await engine.close()
			return result
		}
	}

	/* PASS 3 — support tables (preserve for future)
	const supportTables = tables.filter(table => table.support === true)
	for (const table of supportTables) {
		switch (table.name) {
			case 'categories':
				// const catResult = await handleCategories(engine, table)
				// if (!catResult.ok) {
				//     if (engine.close) await engine.close()
				//     return catResult
				// }
				break
			case 'itemBoms':
				const bomResult = await handleItemBoms(params, engine, table)
				if (!bomResult.ok) {
					if (engine.close) await engine.close()
					return bomResult
				}
				break
		}
	}
	*/

	if (engine.close) await engine.close()
	return { ok: true }
}

// Temporary standalone run
async function run() {
	const result = await downloadSOS({
		database: testDatabases.sqlite,
		sosAuthorization: 'Bearer lUJPKG5uCJPHBsm9AjZWWZ9GY4Cd5b5mU7ELbnSz3oSFlqIi0mvZT-G1G-oLQqhRiYYqKV8WcT5FR5K9YokMuX0eTNknn45AZCcsRZH1u5ulGa6Pq45AL0NFY7gxCY3sNQcouiXN1jMpmEieCRomxiw5ATJo4YIZaQHcDN4ZHr2Ktgghwsnrj0Vpd2QiNqQ3F03WuNcMMoCALu9W-oLA0cN_1RWqwTdQYjWrO052uCX9_z_Egu7wWTlMk8MwOrVPfeKn1YjoTDQx1e_cBfXrgEg-1lG4Vy4RJ0uU3enmwVpOBmAV',
		retries: 5
	})

	if (!result.ok) {
		console.error('downloadSOS failed:', result.error)
		process.exitCode = 1
	} else {
		console.log('downloadSOS completed successfully')
	}
}

run()
