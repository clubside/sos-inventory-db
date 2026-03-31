// engines/mysql.js
const mysql = require('mysql2/promise')

module.exports = function createMySqlEngine(config) {
	let conn = null

	return {
		engine: 'mysql',

		// Identifier quoting for MySQL
		q(name) {
			return `\`${name}\``
		},

		async connect() {
			conn = await mysql.createConnection(config)
		},

		async close() {
			if (conn) await conn.end()
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
			await conn.execute(
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
			await conn.execute(
				`UPDATE ${this.q(table)} SET ${set} WHERE ${whereClause}`,
				[...Object.values(row), ...Object.values(where)]
			)
		},

		async query(sql, params = [], returnValues = false) {
			const isSelect = /^\s*select/i.test(sql)

			if (isSelect || returnValues) {
				const [rows] = await conn.execute(sql, params)
				return rows
			}

			// Non-SELECT, no return values
			await conn.execute(sql, params)
			return []
		}
	}
}
