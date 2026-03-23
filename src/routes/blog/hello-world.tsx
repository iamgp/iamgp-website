import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/hello-world')({
  head: () => ({
    meta: [{ title: 'Hello, world — Gareth Price' }],
  }),
  component: HelloWorld,
})

function HelloWorld() {
  return (
    <>
      <div className="article-header">
        <h1>Hello, world</h1>
        <time>March 2026</time>
      </div>
      <div className="article-body">
        <p>
          This is the first post on my new site. I've been meaning to set up a
          place to write for a while — somewhere to collect notes on the things
          I'm building, learning, and thinking about.
        </p>
        <p>
          By day I build lab automation and data pipelines for gene therapy
          manufacturing. By night I write Go CLIs, iOS apps, and open-source
          data tools. This site is where those worlds overlap.
        </p>
        <p>More soon.</p>
      </div>
      <div style={{ marginTop: 32 }}>
        <Link to="/blog" style={{ fontSize: 13, color: '#999' }}>
          ← back to blog
        </Link>
      </div>
    </>
  )
}
