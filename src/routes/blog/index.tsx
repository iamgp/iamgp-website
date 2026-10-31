import { createFileRoute, Link } from '@tanstack/react-router'
import { privateVpsOverview, privateVpsPosts } from '@/data/blog'

export const Route = createFileRoute('/blog/')({
  head: () => ({ meta: [{ title: 'Blog — Gareth Price' }] }),
  component: BlogIndex,
})

function BlogIndex() {
  return <div className="reading">
    <section style={{ marginTop: 0 }}>
      <h1>Writing.</h1>
      <p className="systems-intro">Notes on the craft of building dependable things for science.</p>
      <section className="blog-series" aria-labelledby="private-vps-series">
        <h2 id="private-vps-series">A private development VPS</h2>
        <p>A fresh Ubuntu setup with Tailscale, Rex, 1Password and an Amp runner. Seven posts, with commands and checks.</p>
        <Link className="inline-link" to="/blog/$slug" params={{ slug: privateVpsOverview.slug }}>Series guide and example conventions</Link>
        <div className="post-list">
          {privateVpsPosts.map((post) => <Link className="post-link" key={post.slug} to="/blog/$slug" params={{ slug: post.slug }}>
            <span className="post-title"><span className="post-number">{post.part}.</span> {post.title}</span>
            <span className="post-date">Oct 2026</span>
          </Link>)}
        </div>
      </section>
      <div className="post-list">
        <Link className="post-link" to="/blog/hello-world"><span className="post-title">Hello, world</span><span className="post-date">Mar 2026</span></Link>
      </div>
    </section>
  </div>
}
