import type { MDXComponents } from 'mdx/types'
import { resolveBlogHref } from '@/data/blog'
import { CodeBlock } from './CodeBlock'

export const mdxComponents: MDXComponents = {
  h1: () => null,
  a: ({ href, children, title }) => <a href={resolveBlogHref(href ?? '')} title={title}>{children}</a>,
  table: ({ children }) => <div className="article-table" role="region" aria-label="Article table" tabIndex={0}><table>{children}</table></div>,
  pre: CodeBlock,
}
