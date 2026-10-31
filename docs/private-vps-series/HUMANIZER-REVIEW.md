# Humanizer review

All seven posts meet the requested minimum of 90. Two original drafts fell below it and received a prose revision. The other five already passed. Product spelling was subsequently corrected to Rex across the series.

Source: [Eric Siu's Humanizer rubric](https://github.com/ericosiu/ai-marketing-skills/blob/main/content-ops/experts/humanizer.md), read on 31 October 2026. The downloaded source snapshot has SHA-256 `584ce11c6eef66ea1a8f5c4fb9bc746aa9e424647310c1717927ac625bef9c45`.

These are my editorial self-assessments under the supplied rubric, not results from an AI detector or a measure of factual accuracy. A score of 100 means I found no remaining deduction under this checklist; it does not mean the article is perfect.

## Scores

| Post | Before | Final | Result |
| --- | ---: | ---: | --- |
| [01. Deciding what each tool is responsible for](../../src/content/blog/private-vps/01-architecture.mdx) | 92 | 92 | Passed without revision |
| [02. Private access before convenience](../../src/content/blog/private-vps/02-private-access-and-ssh.mdx) | 100 | 100 | Passed without revision |
| [03. Rootless Docker with limits that actually apply](../../src/content/blog/private-vps/03-rootless-docker.mdx) | 100 | 100 | Passed without revision |
| [04. Rex, private previews and an iPhone connection](../../src/content/blog/private-vps/04-rex-and-private-previews.mdx) | 100 | 100 | Passed without revision |
| [05. Giving a job one secret](../../src/content/blog/private-vps/05-secrets-with-1password.mdx) | 82 | 100 | Revised and rescored |
| [06. An Amp runner that can deploy](../../src/content/blog/private-vps/06-amp-runner-and-deployments.mdx) | 87 | 100 | Revised and rescored |
| [07. Checking the whole system](../../src/content/blog/private-vps/07-verification-and-recovery.mdx) | 100 | 100 | Passed without revision |

## Scoring method

I started each article at 100, checked the vocabulary list and all 24 patterns, and applied the stated deductions. Repeated instances of one pattern can accumulate to twice its base penalty. No banned-vocabulary matches appeared in the scored prose.

The assessment covers article prose and headings. Commands, configuration keys, quoted example instructions and literal product names retain their technical meaning. A real set of CPU, memory and process limits is not a forced rhetorical trio. Required security qualifications and honest limits on verification are not excessive hedging or generic cutoff disclaimers.

## Deductions and revisions

| Post and original line | Pattern | Deduction | Editorial finding | Action |
| --- | --- | ---: | --- | --- |
| 01, line 9 | 10: Rule of three overuse | -8 | A broad three-part workflow recap repeats the three-part cadence of the opening goals without adding concrete process detail. | Retained; the article already meets the threshold |
| 05, line 37 | 19: Collaborative artifacts | -10 | A conversational handover introduces the example instead of describing its input and behaviour. | Rewritten; deduction removed on rescore |
| 05, line 121 | 10: Rule of three overuse | -8 | The closing paragraph repackages the procedure as a rhetorical three-part summary. | Rewritten; deduction removed on rescore |
| 06, line 5 | 22: Filler phrases | -5 | An unnecessary timeline lead-in repeats the series navigation. | Rewritten; deduction removed on rescore |
| 06, line 5 | 10: Rule of three overuse | -8 | The generic three-part introduction withholds the account and path that would make it useful. | Rewritten; deduction removed on rescore |

Post 1 keeps its 8-point deduction for the general three-part description of the assistant's work. Its final score is 92, so the requested threshold does not require a rewrite. Functional lists and actual test steps elsewhere were not penalised merely for having three entries.

For posts 5 and 6, I reread the revised paragraphs with the unchanged article text and found no new pattern to deduct. The revisions replace the conversational introduction and the generic summaries with the receiver's actual input, the Mac/VPS division of work, and the runner's account and project path.

## Complete change record

[Every changed line is in the before/after diff](HUMANIZER-CHANGES.md). It includes the three revised article paragraphs, the Rex spelling correction and the conversion to MDX. It also records changes to the reader-facing series guide and its links.

The product name is written Rex. Executable commands, identifiers, ports and security settings retain their original meaning; Human-readable brand spelling changed in the diagram, service description and sample runbook. The architecture diagram now uses a React component, and article navigation links use MDX filenames. These changes do not alter the executable examples. The publication placeholders and security qualifications remain. The website pull request contains the articles and their review records. No live VPS change or production deployment is included.

## Website integration review

The final article prose retains the scores above after conversion to MDX. The series guide, authoring instructions and website check record each score 100 under the same rubric. The pull request description scores 100. No further prose revisions were needed for those documents.
