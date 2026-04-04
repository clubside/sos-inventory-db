// db/transform-row.js

function transformBoolean(engine, value) {
	if (value === null) return null
	if (engine.engine === 'postgres') return value
	return value ? 1 : 0
}

function transformJson(engine, value) {
	if (value === null) return null

	// PostgreSQL: raw objects and raw arrays are fine
	if (engine.engine === 'postgres') {
		return value
	}

	// SQLite + MSSQL: always stringify
	if (engine.engine === 'sqlite' || engine.engine === 'mssql') {
		return JSON.stringify(value)
	}

	// MariaDB/MySQL:
	// - objects: OK (driver serializes them)
	// - arrays: MUST be stringified (driver misinterprets them)
	if (engine.engine === 'mariadb' || engine.engine === 'mysql') {
		if (Array.isArray(value)) {
			return JSON.stringify(value)
		}
		return value // object → let driver handle it
	}

	// fallback
	return JSON.stringify(value)
}

module.exports = function transformRow(engine, tableDef, sosObject) {
	const row = {}

	// PASS 1 — main fields in schema order
	for (const field of tableDef.fields) {
		let value = sosObject[field.name]
		if (value === undefined || value === '') value = null

		if (field.type === 'reference' && field.reference) {
			row[field.name] = transformJson(engine, value)
			continue
		}

		if (value === undefined) {
			row[field.name] = null
		} else if (field.type === 'boolean') {
			row[field.name] = transformBoolean(engine, value)
		} else if (field.type === 'decimal') {
			row[field.name] = value
		} else if (field.type === 'object' || field.type === 'array') {
			row[field.name] = transformJson(engine, value)
		} else {
			row[field.name] = value
		}
	}

	// PASS 2 — synthetic FK fields appended at the end
	// PASS 2 — synthetic FK fields appended at the end
	for (const field of tableDef.fields) {
		if (field.type !== 'reference') continue

		// Raw value from SOS payload
		let refObj = sosObject[field.name]

		// --- Preserve the unwrap fix ---
		if (Array.isArray(refObj)) {
			if (refObj.length === 1 && typeof refObj[0] === 'object' && refObj[0] !== null) {
				refObj = refObj[0]
			} else {
				refObj = null
			}
		}

		// --- True SOS reference: extract FK ---
		if (field.reference) {
			const fkName = field.reference.field
			const fkValue = refObj?.[field.reference.property] ?? null
			row[fkName] = fkValue
		}

		// --- ALWAYS store the reference object itself (true + ghost refs) ---
		// Pass 1 already created the column; here we only populate it.
		row[field.name] = refObj == null ? null : transformJson(engine, refObj)
	}

	return row
}
