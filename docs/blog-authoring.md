# Writing MDX posts

The private VPS articles live in `src/content/blog/private-vps/`. They compile to React components through `@mdx-js/rollup`; `remark-gfm` adds tables and task lists.

Edit the `.mdx` source, then update its title, description and filename in `src/data/blog.ts`. That registry maps each source file to its `/blog/<slug>` URL. The page template supplies the title and date, so it omits the source file's first-level heading when rendering.

Relative links between the series files resolve to their published routes. Keep executable filenames inside code examples unchanged.

Import React components directly into an MDX file when a post needs them. The VPS series uses `ArticleIllustration` for the approved drawings in `public/images/blog/private-vps/`. Supply descriptive alt text and a caption. The component reserves the image's aspect ratio and links both the image and its caption to the full-size SVG. The white paper is part of the drawings; the surrounding caption and focus styles use the site's theme tokens.

The drawings use the [Dimensional Drawing kit](https://github.com/enesozturk/dimensional-drawing). Keep its accompanying MIT licence with the assets. Copy only approved drawings into the public folder; review notes and infrastructure records remain outside the site.

`MermaidDiagram` remains available for diagrams written as Mermaid source. It loads Mermaid in the browser, follows the selected site theme and keeps the source readable if rendering fails.

MDX compiles executable code. Keep it limited to trusted repository content rather than accepting it from readers.

Run `npm run build` before opening a pull request. The build prerenders the pages discovered through the site's links. Check a direct article URL as well as navigation from the writing index. Check diagrams and wide code blocks at phone width, and use the homepage theme control to inspect light and dark modes.

The series guide documents the example names and placeholders. Keep the infrastructure identifiers fictional when editing the posts.

Before publishing a procedural post, read it in series order as a fresh installation. Introduce each tool before using it. At every machine or account change, name the context and show the login or return command. Give the working directory, file-creation command and required permissions where a step depends on them. Pair checks with the expected result, labelling shortened or schematic output. Check that example files match the prose and that later steps use only files and settings already created. Preserve the series' fuller paragraphs and few headings.
