// db/database.js

const engines = {
	sqlite: require('../engines/sqlite.js'),
	mariadb: require('../engines/mariadb.js'),
	mysql: require('../engines/mysql.js'),
	postgres: require('../engines/postgres.js'),
	mssql: require('../engines/mssql.js')
}

function createDatabaseEngine(options = {}) {
	if (!options.connection) {
		throw new Error('Missing required option: connection')
	}

	const { engine } = options.connection
	if (!engine) {
		throw new Error('Missing required connection.engine property')
	}

	const factory = engines[engine]
	if (!factory) {
		throw new Error(
			`Unsupported database engine "${engine}". ` +
			`Supported engines: ${Object.keys(engines).join(', ')}`
		)
	}

	const instance = factory(options.connection)

	const required = [
		'connect',
		'close',
		'begin',
		'commit',
		'rollback',
		'insert',
		'update'
	]

	for (const fn of required) {
		if (typeof instance[fn] !== 'function') {
			throw new Error(
				`Engine "${engine}" is missing required method "${fn}".`
			)
		}
	}

	return instance
}

module.exports = async function openDb(params) {
	const engine = createDatabaseEngine({ connection: params })
	await engine.connect()
	return engine
}
