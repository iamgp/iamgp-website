# Writing MDX posts

The private VPS articles live in `src/content/blog/private-vps/`. They compile to React components through `@mdx-js/rollup`; `remark-gfm` adds tables and task lists.

Edit the `.mdx` source, then update its title, description and filename in `src/data/blog.ts`. That registry maps each source file to its `/blog/<slug>` URL. The page template supplies the title and date, so it omits the source file's first-level heading when rendering.

Relative links between the series files resolve to their published routes. Keep executable filenames inside code examples unchanged.

Import React components directly into an MDX file when a post needs them. The architecture post imports `MermaidDiagram`, which loads Mermaid in the browser and follows the selected site theme. Its source remains readable when JavaScript cannot draw the diagram.

MDX compiles executable code. Keep it limited to trusted repository content rather than accepting it from readers.

Run `npm run build` before opening a pull request. The build prerenders the pages discovered through the site's links. Check a direct article URL as well as navigation from the writing index. Check diagrams and wide code blocks at phone width, and use the homepage theme control to inspect light and dark modes.

The VPS series' editorial scope and writing scores are in [its review records](private-vps-series/HUMANIZER-REVIEW.md). Its [change record](private-vps-series/HUMANIZER-CHANGES.md) shows every changed article line against the original drafts.
