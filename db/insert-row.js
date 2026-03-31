// db/insert-row.js

const transformRow = require('./transform-row')

module.exports = async function insertRow(engine, tableDef, sosObject) {
	try {
		const mainRow = transformRow(engine, tableDef, sosObject)
		await engine.insert(tableDef.name, mainRow)

		for (const field of tableDef.fields) {
			if (field.sidecar) {
				const scResult = await insertSidecarRows(engine, field, sosObject, mainRow)
				if (!scResult.ok) return scResult
			}
		}

		return { ok: true }
	} catch (err) {
		return { ok: false, error: err }
	}
}

function extractReferenceValue(nested, field) {
	if (!nested) return null
	return nested[field.reference.property] ?? null
}

async function insertSidecarRows(engine, field, sosObject, mainRow) {
	try {
		const sidecar = field.sidecar
		const items = sosObject[field.name]
		if (!Array.isArray(items)) return { ok: true }

		for (const item of items) {
			const row = {}

			for (const scField of sidecar.fields) {
				if (scField.autoIncrement) continue
				let value = null

				if (scField.source === 'new') {
					value = null
				} else if (scField.source === 'object') {
					const raw = item[scField.property]
					if (scField.type === 'reference') {
						const fk = extractReferenceValue(raw, scField)
						row[scField.reference.field] = fk
						value = raw
					} else {
						value = raw
					}
				} else if (scField.source === 'row') {
					value = mainRow[scField.property]
				}

				row[scField.name] = transformSidecarValue(engine, scField, value)
			}

			await engine.insert(sidecar.table, row)
		}

		return { ok: true }
	} catch (err) {
		return { ok: false, error: err }
	}
}

function transformSidecarValue(engine, field, value) {
	if (value === undefined) return null
	if (value === null) return null
	switch (field.type) {
		case 'boolean':
			return transformBoolean(engine, value)
		case 'decimal':
			return value
		case 'object':
		case 'array':
		case 'reference':
			return transformJson(engine, value)
		default:
			return value
	}
}

function transformBoolean(engine, value) {
	if (engine.engine === 'postgres') return value
	return value ? 1 : 0
}

function transformJson(engine, value) {
	if (value === null) return null
	if (engine.engine === 'postgres') return value
	if (engine.engine === 'sqlite' || engine.engine === 'mssql') return JSON.stringify(value)
	if (engine.engine === 'mariadb' || engine.engine === 'mysql') {
		if (Array.isArray(value)) return JSON.stringify(value)
		return value
	}
	return JSON.stringify(value)
}
