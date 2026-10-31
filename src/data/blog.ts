import { lazy, type ComponentType } from 'react'
import type { MDXProps } from 'mdx/types'

export type BlogPost = {
  slug: string
  file: string
  title: string
  description: string
  part?: number
  date: string
}

export const privateVpsOverview: BlogPost = {
  slug: 'private-development-vps',
  file: 'README.mdx',
  title: 'A private development VPS, from a fresh install',
  description: 'A seven-part guide to a private Ubuntu development VPS with Tailscale, Rex, 1Password and an Amp runner.',
  date: '2026-10-31',
}

export const privateVpsPosts: BlogPost[] = [
  { slug: 'private-vps-architecture', file: '01-architecture.mdx', title: 'Deciding what each tool is responsible for', description: 'The architecture and permissions behind a private development machine.', part: 1, date: '2026-10-31' },
  { slug: 'private-vps-access-and-ssh', file: '02-private-access-and-ssh.mdx', title: 'Private access before convenience', description: 'Tailscale grants, verified SSH host keys and separate development and administrator accounts.', part: 2, date: '2026-10-31' },
  { slug: 'private-vps-rootless-docker', file: '03-rootless-docker.mdx', title: 'Rootless Docker with limits that actually apply', description: 'Rootless containers, writable project mounts and resource limits checked inside the running job.', part: 3, date: '2026-10-31' },
  { slug: 'private-vps-rex-and-previews', file: '04-rex-and-private-previews.mdx', title: 'Rex, private previews and an iPhone connection', description: 'Persistent remote terminals and private HTTPS previews, accessible from a Mac and iPhone.', part: 4, date: '2026-10-31' },
  { slug: 'private-vps-secrets', file: '05-secrets-with-1password.mdx', title: 'Giving a job one secret', description: 'Delivering selected 1Password values over SSH without giving the server a general vault credential.', part: 5, date: '2026-10-31' },
  { slug: 'private-vps-amp-deployments', file: '06-amp-runner-and-deployments.mdx', title: 'An Amp runner that can deploy', description: 'A persistent runner with explicit account selection, deployment instructions and a real acceptance test.', part: 6, date: '2026-10-31' },
  { slug: 'private-vps-verification', file: '07-verification-and-recovery.mdx', title: 'Checking the whole system', description: 'Client access, restart behaviour and provider-console recovery, with clear limits on what passed.', part: 7, date: '2026-10-31' },
]

const posts = [privateVpsOverview, ...privateVpsPosts]
const sources = import.meta.glob<{ default: ComponentType<MDXProps> }>('/src/content/blog/private-vps/*.mdx')
const components = new Map(posts.map((post) => {
  const source = sources[`/src/content/blog/private-vps/${post.file}`]
  if (!source) throw new Error(`Missing MDX source for ${post.slug}`)
  return [post.slug, lazy(source)] as const
}))

export function getBlogPost(slug: string) {
  return posts.find((entry) => entry.slug === slug)
}

export function getBlogComponent(slug: string) {
  const component = components.get(slug)
  if (!component) throw new Error(`Missing article component: ${slug}`)
  return component
}

export function resolveBlogHref(href: string) {
  const separator = href.indexOf('#')
  const file = (separator < 0 ? href : href.slice(0, separator)).replace(/^\.\//, '')
  const fragment = separator < 0 ? '' : href.slice(separator)
  const post = posts.find((entry) => entry.file === file || entry.file.replace(/\.mdx$/, '.md') === file)
  return post ? `/blog/${post.slug}${fragment}` : href
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`))
}
