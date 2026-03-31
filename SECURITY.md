# Security Policy

## Supported Versions

This project is maintained on a best‑effort basis.
Security updates are applied when practical and when they align with the project’s goals.

## Reporting a Vulnerability

If you discover a security issue, do **not** open a public issue.

Instead:

1. Describe the problem clearly.
2. Include steps to reproduce.
3. Include any relevant logs or payloads.
4. Contact the maintainer privately.

This ensures vulnerabilities are handled responsibly and without exposing users to unnecessary risk.

## What to Expect

After reporting a security issue:

- The maintainer will review the report.
- If confirmed, a fix will be developed as time permits.
- You may be contacted for additional details.
- A public advisory or release may be created once the issue is resolved.

## Scope

This project handles ingestion, schema creation, and API interaction.
Security concerns that fall **within** scope include:

- SQL injection risks
- Unsafe handling of SOS API credentials
- Incorrect environment variable usage
- Exposure of sensitive data in logs
- Schema or ingestion logic that could corrupt data

Security concerns that fall **outside** scope include:

- Issues caused by user‑specific environments
- Problems with third‑party dependencies
- Vulnerabilities in SOS Inventory’s API
- Misconfigurations in user‑managed databases or servers

## Responsible Disclosure

Please give the maintainer reasonable time to investigate and address the issue before discussing it publicly.

## Final Note

This project is open‑source and maintained voluntarily.
Clear, responsible reports help keep the project stable and safe for everyone.
