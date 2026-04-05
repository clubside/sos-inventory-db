const fs = require('fs')
const esbuild = require('esbuild')

async function build() {
	// Clean dist/
	if (fs.existsSync('dist')) {
		fs.rmSync('dist', { recursive: true, force: true })
	}

	// Recreate dist/
	fs.mkdirSync('dist')

	// Build CJS
	await esbuild.build({
		entryPoints: ['index.js'],
		outfile: 'dist/index.cjs',
		format: 'cjs',
		bundle: true,
		platform: 'node',
		external: ['better-sqlite3', 'mariadb', 'mysql2', 'pg', 'mssql']
	})

	// Build ESM
	await esbuild.build({
		entryPoints: ['index.js'],
		outfile: 'dist/index.mjs',
		format: 'esm',
		bundle: true,
		platform: 'node',
		external: ['better-sqlite3', 'mariadb', 'mysql2', 'pg', 'mssql']
	})
}

build()
