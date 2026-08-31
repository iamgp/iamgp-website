import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [{ title: 'Blog — Gareth Price' }],
  }),
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <div className="reading">
      <section style={{ marginTop: 0 }}>
        <h1>Writing.</h1>
        <p className="systems-intro">Notes on the craft of building dependable things for science.</p>
        <div className="post-list">
          <Link className="post-link" to="/blog/hello-world">
            <span className="post-title">Hello, world</span>
            <span className="post-date">Mar 2026</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
