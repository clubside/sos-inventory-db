// engines/postgres.js
const { Client } = require('pg')

module.exports = function createPostgresEngine(config) {
	let client = null

	return {
		engine: 'postgres',

		// Identifier quoting for PostgreSQL
		q(name) {
			return `"${name}"`
		},

		async connect() {
			client = new Client(config)
			await client.connect()
		},

		async close() {
			if (client) await client.end()
		},

		async begin() {
			await client.query('BEGIN')
		},

		async commit() {
			await client.query('COMMIT')
		},

		async rollback() {
			await client.query('ROLLBACK')
		},

		// ✅ FIXED: use this.q() instead of hard-coded quotes
		async insert(table, row) {
			const keys = Object.keys(row)
			const cols = keys.map(k => this.q(k)).join(', ')

			const values = Object.values(row)
			values.forEach((value, i) => {
				const isJsonCandidate =
					value !== null &&
					(Array.isArray(value) || typeof value === 'object')

				if (isJsonCandidate) {
					values[i] = JSON.stringify(value)
				}
			})

			const placeholders = Object.values(row).map((value, i) => {
				const isJsonCandidate =
					value !== null &&
					(Array.isArray(value) || typeof value === 'object')
				return isJsonCandidate ? `$${i + 1}::jsonb` : `$${i + 1}`
			}).join(', ')

			await client.query(
				`INSERT INTO ${this.q(table)} (${cols}) VALUES (${placeholders})`,
				values
			)
		},

		// ✅ FIXED: use this.q() instead of hard-coded quotes
		async update(table, row, where) {
			const keys = Object.keys(row)
			const set = keys.map((k, i) => `${this.q(k)} = $${i + 1}`).join(', ')
			const whereKeys = Object.keys(where)
			const whereClause = whereKeys
				.map((k, i) => `${this.q(k)} = $${keys.length + i + 1}`)
				.join(' AND ')
			await client.query(
				`UPDATE ${this.q(table)} SET ${set} WHERE ${whereClause}`,
				[...Object.values(row), ...Object.values(where)]
			)
		},

		async query(sql, params = [], returnValues = false) {
			const isSelect = /^\s*select/i.test(sql)

			if (isSelect || returnValues) {
				const result = await client.query(sql, params)
				return result.rows
			}

			// Non-SELECT, no return values
			await client.query(sql, params)
			return []
		}
	}
}
