# Release Checklist

Use this checklist before tagging and publishing a new release.

## Code and Schema

- [ ] All schema changes have been reviewed and tested
- [ ] All ingestion logic is stable and tested
- [ ] No debug logs remain
- [ ] No trailing whitespace or formatting issues
- [ ] All typedefs are up to date

## Documentation

- [ ] README.md is current
- [ ] Schema documentation is current
- [ ] Any new features or changes are documented
- [ ] Examples are updated if needed

## Testing

- [ ] Ingestion tested on at least one SQL engine
- [ ] Schema creation tested on all supported engines
- [ ] Full ingestion run completed when practical
- [ ] Null handling verified
- [ ] Cross‑engine behavior verified

## Versioning

- [ ] Version number updated
- [ ] CHANGELOG or release notes updated
- [ ] Tag created with correct version

## Final Checks

- [ ] All tests pass
- [ ] No open issues blocking release
- [ ] No open PRs that should be included
