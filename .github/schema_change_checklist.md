# Schema Change Checklist

Use this checklist whenever modifying or adding a table, field, or relationship.

## Definition

- [ ] Update the schema definition file
- [ ] Update the corresponding JSDoc typedef
- [ ] Add or update field descriptions
- [ ] Confirm nullable vs non‑nullable status is correct
- [ ] Confirm primary keys and foreign keys are correct
- [ ] Confirm cross‑engine compatibility (SQLite, MariaDB, PostgreSQL, MSSQL)

## Ingestion

- [ ] Update ingestion logic to handle the new or modified fields
- [ ] Add guards for missing or null fields
- [ ] Add logging for unexpected shapes
- [ ] Ensure ingestion remains idempotent
- [ ] Test ingestion on a small dataset
- [ ] Test ingestion on a full dataset when practical

## Documentation

- [ ] Update README.md if behavior changes
- [ ] Update schema documentation
- [ ] Update any diagrams or reference docs
- [ ] Add examples if needed

## Testing

- [ ] Verify schema creation on all supported engines
- [ ] Verify inserts work as expected
- [ ] Verify null handling
- [ ] Verify autoincrement or sidecar logic if applicable

## Versioning

- [ ] Determine if the change requires a version bump
- [ ] Update version numbers where applicable
- [ ] Add notes to CHANGELOG or release notes
