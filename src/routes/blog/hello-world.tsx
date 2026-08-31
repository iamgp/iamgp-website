import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/hello-world')({
  head: () => ({
    meta: [{ title: 'Hello, world — Gareth Price' }],
  }),
  component: HelloWorld,
})

function HelloWorld() {
  return (
    <div className="reading">
      <div className="article-header">
        <h1>Hello, world</h1>
        <time>March 2026</time>
      </div>
      <div className="article-body">
        <p>
          This is a place to collect notes from the boundary between experimental
          science and software. That boundary is where much of the interesting
          work happens: an assay meets a spreadsheet, an instrument meets a
          workflow, and a useful answer depends on whether the process behind it
          can be understood and repeated.
        </p>
        <p>
          By day I build lab automation, analytical data products and digital
          infrastructure for gene therapy manufacturing. Outside work, I make
          open-source tools in Go, Python and Swift. The common thread is a
          preference for systems that are inspectable, practical and kind to the
          people who have to use them.
        </p>
        <p><strong>More soon</strong>, on scientific software, automation,
          developer tooling and the small decisions that make technical work
          hold up under real conditions.</p>
      </div>
      <Link className="back-link" to="/blog">← Back to writing</Link>
    </div>
  )
}
