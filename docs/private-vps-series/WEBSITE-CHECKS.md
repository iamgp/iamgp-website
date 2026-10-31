# Website checks

The production build passed on 31 October 2026 and prerendered 13 routes. The `/blog` and `/blog/` aliases share one output file.

All eight new pages contain their article bodies. All 42 internal blog links resolve. The privacy scan passed across the MDX sources and editorial records. The 46 fenced code examples match the original drafts after the Rex label correction. The architecture component retains the original Mermaid source.

Browser checks used the built static files. The homepage theme control worked in light and dark modes, and direct article visits retained the selected preference. The diagram used the site palette. At a width of 390px, long code blocks and the diagram scrolled within their containers while the page remained 390px wide. The production browser console recorded no errors.

Type checking reports two existing errors in the homepage skills tuple on line 64. Reading that file from base commit `35f031f` produces the same diagnostics. npm reports 19 advisories in existing dependency versions, including three critical advisories. The added packages introduce no new vulnerable versions. Existing package versions are unchanged.

The mechanical design check flagged the site's existing Inter and Geist fonts, plus the neutral border on article quotations. The font choices follow the existing site design. The quotation border identifies quoted text and is not a card accent.

The deployment workflow runs on main. PR checks are not configured. Merging and production deployment remain separate actions.
