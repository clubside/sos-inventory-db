// engines/mssql.js
const sql = require('mssql')

module.exports = function createSqlServerEngine(config) {
	let pool = null
	let tx = null
	let request = null

	return {
		engine: 'mssql',

		// Identifier quoting for Microsoft SQL Server
		q(name) {
			return `[${name}]`
		},

		async connect() {
			pool = await sql.connect(config)
		},

		async close() {
			if (pool) await pool.close()
		},

		async begin() {
			tx = new sql.Transaction(pool)
			await tx.begin()
			request = new sql.Request(tx)
		},

		async commit() {
			await tx.commit()
			tx = null
			request = null
		},

		async rollback() {
			await tx.rollback()
			tx = null
			request = null
		},

		// ✅ FIXED: use this.q() instead of hard-coded brackets
		async insert(table, row) {
			const keys = Object.keys(row)
			const cols = keys.map(k => this.q(k)).join(', ')
			const placeholders = keys.map((_, i) => `@p${i}`).join(', ')
			const req = request || pool.request()
			keys.forEach((k, i) => req.input(`p${i}`, row[k]))
			await req.query(`INSERT INTO ${this.q(table)} (${cols}) VALUES (${placeholders})`)
		},

		// ✅ FIXED: use this.q() instead of hard-coded brackets
		async update(table, row, where) {
			const keys = Object.keys(row)
			const set = keys.map((k, i) => `${this.q(k)} = @s${i}`).join(', ')
			const whereKeys = Object.keys(where)
			const whereClause = whereKeys
				.map((k, i) => `${this.q(k)} = @w${i}`)
				.join(' AND ')
			const req = request || pool.request()
			keys.forEach((k, i) => req.input(`s${i}`, row[k]))
			whereKeys.forEach((k, i) => req.input(`w${i}`, where[k]))
			await req.query(`UPDATE ${this.q(table)} SET ${set} WHERE ${whereClause}`)
		},

		async query(sql, params = [], returnValues = false) {
			const isSelect = /^\s*select/i.test(sql)

			const req = pool.request()
			params.forEach((v, i) => req.input(`p${i}`, v))

			if (isSelect || returnValues) {
				const result = await req.query(sql)
				return result.recordset
			}

			// Non-SELECT, no return values
			await req.query(sql)
			return []
		}
	}
}
