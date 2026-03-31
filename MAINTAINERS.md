# Maintainers Guide

This document describes how this project is maintained, how decisions are made, and what contributors can expect when submitting issues or pull requests.

## Maintainer

This project is currently maintained by a single maintainer.

- All technical decisions, schema changes, and ingestion logic are reviewed and approved by the maintainer.
- The maintainer determines project direction, priorities, and release timing.

## Responsibilities

The maintainer is responsible for:

- Reviewing and merging pull requests
- Ensuring cross‑engine compatibility (SQLite, MariaDB, PostgreSQL, MSSQL)
- Maintaining schema accuracy and documentation
- Keeping ingestion logic predictable and stable
- Rejecting changes that introduce unnecessary complexity
- Closing issues that are duplicates, unclear, or out of scope

The maintainer is **not** responsible for:

- Providing free support on demand
- Implementing features outside the project’s goals
- Debugging user environments
- Responding immediately to issues or PRs

## Pull Request Review Process

Pull requests must meet the following requirements before being considered:

- Clear explanation of the change
- Focused scope (no unrelated edits)
- Code follows project style (StandardJS, no semicolons, tabs)
- Schema changes include updated documentation and typedefs
- Ingestion changes include testing on at least one SQL engine
- No debug logs or trailing whitespace
- No breaking changes unless explicitly discussed

Pull requests may be rejected if they:

- Add unnecessary abstraction or complexity
- Introduce engine‑specific SQL without guards
- Change ingestion behavior without justification
- Modify schema fields without documentation updates
- Attempt to redesign major components without discussion

## Issue Handling

Issues are reviewed based on clarity and relevance.

Issues may be closed if they:

- Lack reproduction steps
- Duplicate existing issues
- Are unrelated to the project’s goals
- Request features outside the project’s scope
- Are based on user‑specific environment problems

## Decision Making

Decisions are made by the maintainer based on:

- Technical correctness
- Long‑term maintainability
- Cross‑engine behavior
- Schema honesty and clarity
- Impact on ingestion stability
- Alignment with project philosophy

Community feedback is welcome, but final decisions rest with the maintainer.

## Release Process

Releases are created when:

- Significant ingestion improvements are made
- Schema changes require a version bump
- Bug fixes accumulate
- Documentation updates warrant a new tag

Releases follow semantic versioning when practical.

## Security Issues

Do not report security vulnerabilities in public issues or pull requests.

Refer to SECURITY.md for instructions on responsible disclosure and private reporting.

## Contact

For questions, open an issue with clear technical details.
For large changes, open a draft PR or discussion before implementing.
