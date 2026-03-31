// engines/sqlite.js
const Database = require('better-sqlite3')

module.exports = function createSqliteEngine(config) {
	const { filename } = config
	let db = null

	return {
		engine: 'sqlite',

		// Identifier quoting for SQLite
		q(name) {
			return `"${name}"`
		},

		async connect() {
			db = new Database(filename)
		},

		async close() {
			if (db) {
				try {
					db.close()
				} catch (err) {
					// ignore "database is already closed"
				}
			}
		},

		async begin() {
			db.prepare('BEGIN').run()
		},

		async commit() {
			db.prepare('COMMIT').run()
		},

		async rollback() {
			db.prepare('ROLLBACK').run()
		},

		async insert(table, row) {
			const keys = Object.keys(row)
			const cols = keys.map(k => this.q(k)).join(', ')
			const placeholders = keys.map(() => '?').join(', ')
			const stmt = db.prepare(`INSERT INTO ${this.q(table)} (${cols}) VALUES (${placeholders})`)
			stmt.run(Object.values(row))
		},

		async update(table, row, where) {
			const keys = Object.keys(row)
			const set = keys.map(k => `${this.q(k)} = ?`).join(', ')
			const whereKeys = Object.keys(where)
			const whereClause = whereKeys.map(k => `${this.q(k)} = ?`).join(' AND ')
			const stmt = db.prepare(`UPDATE ${this.q(table)} SET ${set} WHERE ${whereClause}`)
			stmt.run([...Object.values(row), ...Object.values(where)])
		},

		async query(sql, params = [], returnValues = false) {
			const stmt = db.prepare(sql)

			// Case 1: SELECT always returns rows
			if (/^\s*select/i.test(sql)) {
				return stmt.all(params)
			}

			// Case 2: Non-SELECT but caller wants returned rows (e.g., RETURNING)
			if (returnValues) {
				return stmt.all(params)
			}

			// Case 3: Non-SELECT, no return values
			stmt.run(params)
			return []
		}
	}
}
