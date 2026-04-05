# **sos-inventory-db**

A schema‑driven relational database model for **SOS Inventory**, including:

- Fully documented API contract definitions
- Deterministic ingestion of *all* SOS objects
- Multi‑engine database support (SQLite, PostgreSQL, MariaDB, MySQL, SQL Server)
- A single, stable entry point: **`downloadSOS()`**
- Clean, normalized relational tables generated from real SOS payloads

This package gives you a **local, queryable mirror** of your SOS Inventory data — built from the *actual* API payloads, not the inconsistent documentation.

---

## **Features**

- 🚀 **One function**: `downloadSOS(params)`
- 🧱 **Schema‑driven**: every table is defined in `db/definitions.js`
- 🔄 **Deterministic ingestion**: same results across all engines
- 🗄️ **Multi‑database support**:
  - SQLite (default, zero config)
  - PostgreSQL
  - MariaDB
  - MySQL
  - SQL Server
- 📦 **Dual‑module build**: CommonJS + ESM
- 🧪 **Optional DB drivers** — install only what you need

---

## **Installation**

```bash
npm install sos-inventory-db
```

Optional: install the driver for your database engine:

```bash
npm install better-sqlite3
npm install pg
npm install mariadb
npm install mysql2
npm install mssql
```

---

## **Quickstart**

### ESM

```js
import downloadSOS from 'sos-inventory-db'
// or: const downloadSOS = require('sos-inventory-db')

await downloadSOS({
  database: {
    engine: 'sqlite',
    filename: './sos.db'
  },
  sosAuthorization: process.env.SOS_AUTH
})
```

### CommonJS

```js
const downloadSOS = require('sos-inventory-db')

downloadSOS({
  database: {
    engine: 'sqlite',
    filename: './sos.db'
  },
  sosAuthorization: process.env.SOS_AUTH
})
```

This will:

- Create all tables defined in `db/definitions.js`
- Fetch all SOS Inventory objects
- Normalize them into relational tables
- Insert them into your chosen database engine

---

## **Engine Configuration**

`sos-inventory-db` accepts a `database` object describing the engine and connection parameters.

Here is the full interface:

```js
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
    port: Number(process.env.MSSQL_PORT),
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
```

Pass one of these objects to `downloadSOS()`:

```js
await downloadSOS({
  database: testDatabases.postgres,
  sosAuthorization: process.env.SOS_AUTH
})
```

---

## **Authentication**

You must provide a valid SOS Inventory API token:

```js
await downloadSOS({
  database,
  sosAuthorization: 'Bearer <your-token-here>'
})
```

Or via environment variable:

```bash
export SOS_AUTH="Bearer <token>"
```

---

## **What Gets Created**

`sos-inventory-db` builds a complete relational mirror of your SOS Inventory account, including:

- Items
- Item BOMs
- Customers
- Vendors
- Sales Orders
- Purchase Orders
- Invoices
- Payments
- Locations
- Categories
- Adjustments
- And all supporting lookup tables

Every table is defined in:

```js
db/definitions.js
```

This file is the single source of truth for:

- Table names
- Field types
- Nullability
- Primary keys
- Reference mappings
- Read‑only fields
- API contract definitions

---

## **Why This Exists**

SOS Inventory’s API documentation is:

- incomplete
- inconsistent
- sometimes incorrect
- and often out of sync with real payloads

This package solves that by:

- capturing the *actual* API responses
- documenting the real schema
- normalizing everything into relational tables
- providing a deterministic ingestion engine
- supporting multiple SQL backends

The result is a stable, queryable, local mirror of your SOS data.

---

## **License**

MIT
