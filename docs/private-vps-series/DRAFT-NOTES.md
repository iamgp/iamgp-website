# Editorial notes

The seven numbered MDX files are the posts. README.mdx is the reader-facing series guide. The files in this directory record editorial decisions and the writing review.

## Scope and voice

- Start with an already provisioned, fresh Ubuntu 24.04 LTS VPS and working provider-console access.
- Write in the owner's first person, using only the recorded purpose, decisions, problems and verification results. Do not add invented personal scenes or motivations.
- Explain the configuration as a solo development setup. Public sharing, production operations and additional backup implementation are outside this series.
- Distinguish the host Amp runner from constrained container jobs. Instructions and MCP settings do not isolate an agent from the host user's authority.
- Distinguish verified results from the adapted recipes. In particular, the foundation passed a full reboot; the later Amp installation passed service-start/restart and account-selection checks.

## Publication privacy choices

The posts use fictional hostnames, Linux account names, a runner label, SSH aliases and 1Password labels. They replace network addresses, the tailnet suffix and account identities with explicit placeholders.

They do not include real public or private IPs, real domains or private URLs, provider machine identifiers, SSH key material or fingerprints, credential values, vault item identifiers, sign-in/device codes, tunnel identifiers, private repository links, thread/session identifiers, raw logs or screenshots. Exact installed snapshot and kernel build identifiers are also omitted.

Standard commands, example port numbers, resource budgets and product names remain because a reader needs them to understand the design. They are configuration examples, not secret access credentials. Security comes from the access controls and authentication, not from treating the recipe as confidential.

Do not replace the placeholders with the live deployment's values when publishing. Do not attach the private inventory, credential exports or original screenshots as an appendix.

## Checks before publication

The drafting pass checks the local Markdown links, JSON/YAML/Python examples and the drafts against identifying values in the private implementation record. It does not run the anonymised provisioning commands against a second VPS. Reread vendor documentation for the installed versions before presenting the examples as a currently tested turnkey installer.

External citations use vendor documentation. The historical implementation and acceptance claims come from the recorded configuration and checks, rather than from generic vendor marketing claims.

The completed drafting checks found no identifying-value matches against the private configuration and acceptance record. All 27 original relative Markdown links resolved. The website maps article links to their published blog routes. Four JSON blocks, three Python blocks and 27 shell blocks passed parsing; the Compose YAML, four INI blocks and the Dockerfile's expected copy mode and runtime user also passed the relevant static checks.

The infrastructure repository remains separate. These files accompany a website pull request; merging and deploying the posts are separate actions.
