const path = require('node:path')
const downloadSOS = require('../index.js')

require('dotenv').config({
	path: path.resolve(__dirname, '..', '.env')
})

const testDatabases = {
	sqlite: {
		engine: 'sqlite',
		filename: 'db/wdm.db'
	},
	mariadb: {
		engine: 'mariadb',
		host: process.env.MARIADB_HOST,
		port: process.env.MARIADB_PORT,
		user: process.env.MARIADB_USER,
		password: process.env.MARIADB_PASSWORD,
		database: process.env.MARIADB_DATABASE
	},
	postgres: {
		engine: 'postgres',
		host: process.env.POSTGRESQL_HOST,
		port: process.env.POSTGRESQL_PORT,
		user: process.env.POSTGRESQL_USER,
		password: process.env.POSTGRESQL_PASSWORD,
		database: process.env.POSTGRESQL_DATABASE
	},
	mssql: {
		engine: 'mssql',
		server: process.env.MSSQL_SERVER,
		port: process.env.MSSQL_PORT,
		authentication: {
			type: 'default',
			options: {
				userName: process.env.MSSQL_USER,
				password: process.env.MSSQL_PASSWORD
			}
		},
		options: {
			database: process.env.MSSQL_DATABASE,
			encrypt: true,
			trustServerCertificate: true,
			enableArithAbort: true
		}
	}
}

async function run() {
	const result = await downloadSOS({
		database: testDatabases.sqlite,
		sosAuthorization: process.env.SOS_AUTH,
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
