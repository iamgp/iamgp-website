import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Suspense } from 'react'
import { mdxComponents } from '@/components/MdxComponents'
import { formatPostDate, getBlogComponent, getBlogPost, privateVpsOverview } from '@/data/blog'

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
  return <article className="reading">
    <header className="article-header">
      <Link className="article-series" to="/blog/$slug" params={{ slug: privateVpsOverview.slug }}>
        Private development VPS{post.part ? ` · Part ${post.part} of 7` : ''}
      </Link>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
    </header>
    <div className="article-body markdown-body"><Suspense fallback={<p>Loading article…</p>}><Content components={mdxComponents} /></Suspense></div>
    <Link className="back-link" to="/blog">← Back to writing</Link>
  </article>
}
