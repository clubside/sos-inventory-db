// db/create-table.js

const sqliteTypes = {
	string: 'TEXT',
	integer: 'INTEGER',
	boolean: 'INTEGER',
	decimal: 'NUMERIC',
	object: 'TEXT',
	array: 'TEXT',
	reference: 'TEXT',
	timestamp: 'TEXT'
}

const postgresTypes = {
	string: 'TEXT',
	integer: 'INTEGER',
	boolean: 'BOOLEAN',
	decimal: 'NUMERIC',
	object: 'JSONB',
	array: 'JSONB',
	reference: 'JSONB',
	timestamp: 'TIMESTAMPTZ'
}

const mysqlTypes = {
	string: 'TEXT',
	integer: 'INT',
	boolean: 'TINYINT(1)',
	decimal: 'DECIMAL(38,10)',
	object: 'JSON',
	array: 'JSON',
	reference: 'JSON',
	timestamp: 'DATETIME(6)'
}

const mariadbTypes = mysqlTypes

const mssqlTypes = {
	string: 'NVARCHAR(MAX)',
	integer: 'INT',
	boolean: 'BIT',
	decimal: 'DECIMAL(38,10)',
	object: 'NVARCHAR(MAX)',
	array: 'NVARCHAR(MAX)',
	reference: 'NVARCHAR(MAX)',
	timestamp: 'DATETIME2'
}

const typeMaps = {
	sqlite: sqliteTypes,
	postgres: postgresTypes,
	mysql: mysqlTypes,
	mariadb: mariadbTypes,
	mssql: mssqlTypes
}

module.exports = async function createTable(engine, tableDef) {
	try {
		const engineName = engine.engine
		const types = typeMaps[engineName]
		if (!types) return { ok: false, error: new Error(`Unsupported engine "${engineName}"`) }

		const columnDefs = []

		for (const field of tableDef.fields) {
			const sqlType = types[field.type]
			if (!sqlType) return { ok: false, error: new Error(`Unknown field type "${field.type}" in table "${tableDef.name}"`) }
			let col = `${engine.q(field.name)} ${sqlType}`
			if (field.nulls === false) col += ' NOT NULL'
			if (field.unique) col += ' UNIQUE'
			columnDefs.push(col)
		}

		for (const field of tableDef.fields) {
			if (field.type === 'reference' && field.reference) {
				const fkName = field.reference.field
				const exists = tableDef.fields.some(f => f.name === fkName)
				if (exists) continue
				const fkType = types.integer
				columnDefs.push(`${engine.q(fkName)} ${fkType}`)
			}
		}

		if (Array.isArray(tableDef.primaryKey) && tableDef.primaryKey.length > 0) {
			const pkCols = tableDef.primaryKey.map(name => engine.q(name)).join(', ')
			columnDefs.push(`PRIMARY KEY (${pkCols})`)
		}

		let sql = `CREATE TABLE ${engine.q(tableDef.name)} (\n`
		sql += columnDefs.join(',\n')
		sql += '\n)'

		await engine.query(`DROP TABLE IF EXISTS ${engine.q(tableDef.name)}`)
		await engine.query(sql)

		if (tableDef.indexes) {
			for (const index of tableDef.indexes) {
				const indexName = `${tableDef.name}_${index.fields.join('_')}_idx`
				const fieldList = index.fields.map(f => engine.q(f)).join(', ')
				await engine.query(`CREATE INDEX ${engine.q(indexName)} ON ${engine.q(tableDef.name)} (${fieldList})`)
			}
		}

		for (const field of tableDef.fields) {
			if (field.sidecar) {
				const scResult = await createSidecar(engine, field.sidecar, types)
				if (!scResult.ok) return scResult
			}
		}

		return { ok: true }
	} catch (err) {
		return { ok: false, error: err }
	}
}

async function createSidecar(engine, sidecar, types) {
	try {
		const engineName = engine.engine
		const cols = []
		const hasAuto = sidecar.fields.some(f => f.autoIncrement)

		for (const field of sidecar.fields) {
			const sqlType = types[field.type]
			if (!sqlType) return { ok: false, error: new Error(`Unknown sidecar field type "${field.type}" in table "${sidecar.table}"`) }

			let col = `${engine.q(field.name)} ${sqlType}`

			if (field.autoIncrement) {
				if (engineName === 'sqlite') col = `${engine.q(field.name)} INTEGER PRIMARY KEY AUTOINCREMENT`
				else if (engineName === 'postgres') col = `${engine.q(field.name)} SERIAL PRIMARY KEY`
				else if (engineName === 'mysql' || engineName === 'mariadb') col += ' AUTO_INCREMENT PRIMARY KEY'
				else if (engineName === 'mssql') col += ' IDENTITY(1,1) PRIMARY KEY'
			} else {
				if (field.nulls === false) col += ' NOT NULL'
				if (field.unique) col += ' UNIQUE'
			}

			cols.push(col)
		}

		for (const field of sidecar.fields) {
			if (field.type === 'reference' && field.reference) {
				const fkName = field.reference.field
				const exists = sidecar.fields.some(f => f.name === fkName)
				if (exists) continue
				const fkType = types.integer
				cols.push(`${engine.q(fkName)} ${fkType}`)
			}
		}

		if (!hasAuto && Array.isArray(sidecar.primaryKey) && sidecar.primaryKey.length > 0) {
			const pkCols = sidecar.primaryKey.map(name => engine.q(name)).join(', ')
			cols.push(`PRIMARY KEY (${pkCols})`)
		}

		let sql = `CREATE TABLE ${engine.q(sidecar.table)} (\n`
		sql += cols.join(',\n')
		sql += '\n)'

		await engine.query(`DROP TABLE IF EXISTS ${engine.q(sidecar.table)}`)
		await engine.query(sql)

		return { ok: true }
	} catch (err) {
		return { ok: false, error: err }
	}
}
