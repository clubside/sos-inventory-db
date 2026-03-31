// engines/mariadb.js
const mariadb = require('mariadb')

module.exports = function createMariaDbEngine(config) {
	let pool = null
	let conn = null

	return {
		engine: 'mariadb',

		// Identifier quoting for MariaDB
		q(name) {
			return `\`${name}\``
		},

		async connect() {
			pool = mariadb.createPool(config)
			conn = await pool.getConnection()
		},

		async close() {
			if (conn) await conn.release()
			if (pool) await pool.end()
		},

		async begin() {
			await conn.beginTransaction()
		},

		async commit() {
			await conn.commit()
		},

		async rollback() {
			await conn.rollback()
		},

		// ✅ FIXED: use this.q() instead of hard-coded backticks
		async insert(table, row) {
			const keys = Object.keys(row)
			const cols = keys.map(k => this.q(k)).join(', ')
			const placeholders = keys.map(() => '?').join(', ')
			await conn.query(
				`INSERT INTO ${this.q(table)} (${cols}) VALUES (${placeholders})`,
				Object.values(row)
			)
		},

		// ✅ FIXED: use this.q() instead of hard-coded backticks
		async update(table, row, where) {
			const keys = Object.keys(row)
			const set = keys.map(k => `${this.q(k)} = ?`).join(', ')
			const whereKeys = Object.keys(where)
			const whereClause = whereKeys.map(k => `${this.q(k)} = ?`).join(' AND ')
			await conn.query(
				`UPDATE ${this.q(table)} SET ${set} WHERE ${whereClause}`,
				[...Object.values(row), ...Object.values(where)]
			)
		},

		async query(sql, params = [], returnValues = false) {
			const isSelect = /^\s*select/i.test(sql)

			if (isSelect || returnValues) {
				// SELECT or RETURNING (MariaDB supports RETURNING in 10.5+)
				return await conn.query(sql, params)
			}

			// Non-SELECT, no return values
			await conn.query(sql, params)
			return []
		}
	}
}
