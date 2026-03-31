# Contributing Guide

Thank you for your interest in contributing. This project is designed to be transparent, predictable, and friendly to future maintainers. The goal is to keep the ingestion pipeline, schema, and utilities clear and honest, without hidden assumptions or engine-specific surprises.

This guide explains how to contribute code, documentation, tests, and schema updates in a way that aligns with the project’s philosophy.

## 1. Project Philosophy

Clarity over cleverness
Code should be explicit, readable, and intention-revealing.

Minimal, precise fixes
Avoid large rewrites unless absolutely necessary. Prefer surgical changes.

Cross-engine compatibility
All SQL must work on MariaDB, SQLite, PostgreSQL, and MSSQL unless explicitly documented.

Honest schemas
Nullable fields should be nullable. Support tables should reflect real SOS data, not fake or inferred values.

Contributor-friendly
New developers should be able to understand the workflow without spelunking through the codebase.

## 2. How to Contribute

### Reporting Issues

When filing an issue, include:

- What you expected to happen
- What actually happened
- Steps to reproduce
- Relevant logs or SQL output
- SOS API responses if applicable

### Submitting Pull Requests

Before opening a PR:

1. Ensure your code follows the project’s style (StandardJS, no semicolons, tabs not spaces).
2. Add or update JSDoc typedefs if you introduce or modify data structures.
3. Update README.md or schema documentation if your change affects ingestion behavior.
4. Test your change on at least one SQL engine (SQLite is fine for most cases).
5. Keep commits focused and atomic.

PRs should explain:

- What changed
- Why it changed
- How it was tested
- Any cross-engine considerations

## 3. Coding Standards

### JavaScript

- StandardJS style
- No semicolons
- Tabs for indentation
- Prefer explicit variable names
- Avoid clever one-liners that obscure intent

### JSDoc

All functions, typedefs, and schema definitions must include:

- Clear descriptions
- Field types
- Nullable vs non-nullable
- Any engine-specific notes

### SQL

- No engine-specific syntax unless wrapped in engine checks
- Primary keys defined once
- Autoincrement handled via sidecar tables
- Avoid triggers, views, or stored procedures

## 4. Schema Changes

If you modify or add a table:

1. Update the schema definition file.
2. Update the JSDoc typedef.
3. Update the ingestion function.
4. Update documentation describing the table.
5. Run ingestion on a small dataset to validate field behavior.
6. Confirm compatibility across engines.

Schema changes must be backward-compatible unless explicitly discussed.

## 5. Ingestion Pipeline Rules

- Never assume SOS fields are present.
- Always guard against nulls.
- Log unexpected shapes.
- Avoid silent failures.
- Keep ingestion idempotent.
- Prefer explicit checks over clever expressions.

Example:
Use “if (lines.length === 0)” instead of relying on operator precedence.

## 6. Testing

Tests should cover:

- Ingestion of typical SOS responses
- Edge cases (missing fields, nulls, empty arrays)
- Cross-engine schema creation
- Insert behavior for nullable fields
- Sidecar autoincrement logic

If you add a new ingestion function, include at least one test that validates its output shape.

## 7. Documentation

Every contribution that changes behavior must update:

- README.md
- Relevant schema docs
- Any affected JSDoc typedefs

Documentation should be:

- Explicit
- Honest
- Free of assumptions
- Written for future contributors

## 8. Code of Conduct

Be respectful, constructive, and collaborative.
We’re all here to build something robust and archival-quality.

## 9. Getting Help

If you’re unsure about a change, open an issue or draft PR.
Discussion is encouraged before implementing large changes.
