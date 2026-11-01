import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Suspense } from 'react'
import { mdxComponents } from '@/components/MdxComponents'
import { formatPostDate, getBlogComponent, getBlogPost, privateVpsOverview, privateVpsPosts } from '@/data/blog'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? 'Writing'} — Gareth Price` },
      ...(loaderData ? [{ name: 'description', content: loaderData.description }] : []),
    ],
  }),
  component: BlogArticle,
  notFoundComponent: () => <div className="reading"><h1>Post not found</h1><Link className="back-link" to="/blog">Back to writing</Link></div>,
})

function BlogArticle() {
  const post = Route.useLoaderData()
  const Content = getBlogComponent(post.slug)
  const postIndex = privateVpsPosts.findIndex((entry) => entry.slug === post.slug)
  const previous = privateVpsPosts[postIndex - 1]
  const next = postIndex >= 0 ? privateVpsPosts[postIndex + 1] : undefined
  return <article className="reading">
    <header className="article-header">
      <div className="article-topline">
        <span className="article-series">
          Private development VPS{post.part ? ` · Part ${post.part} of ${privateVpsPosts.length}` : ''}
        </span>
        {postIndex >= 0 && <nav className="article-navigation" aria-label="Series navigation">
          {previous && <Link to="/blog/$slug" params={{ slug: previous.slug }} rel="prev" aria-label={`Previous: ${previous.title}`}>Previous</Link>}
          <Link to="/blog/$slug" params={{ slug: privateVpsOverview.slug }}>Series index</Link>
          {next && <Link to="/blog/$slug" params={{ slug: next.slug }} rel="next" aria-label={`Next: ${next.title}`}>Next</Link>}
        </nav>}
      </div>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
    </header>
    <div className="article-body markdown-body"><Suspense fallback={<p>Loading article…</p>}><Content components={mdxComponents} /></Suspense></div>
    {next && <nav className="article-next" aria-label="Continue the series">
      <Link to="/blog/$slug" params={{ slug: next.slug }} rel="next"><span>Next: </span>{next.title}</Link>
    </nav>}
    <Link className="back-link" to="/blog">← Back to writing</Link>
  </article>
}
