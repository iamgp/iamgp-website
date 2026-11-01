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
  title: 'Building a private development VPS',
  description: 'A private development VPS with remote terminals, private previews and an Amp deployment runner.',
  date: '2026-10-31',
}

export const privateVpsPosts: BlogPost[] = [
  { slug: 'private-vps-architecture', file: '01-architecture.mdx', title: 'A development VPS I can use from anywhere', description: 'How Tailscale, Rex, Docker, 1Password and Amp fit together on a development VPS.', part: 1, date: '2026-10-31' },
  { slug: 'private-vps-access-and-ssh', file: '02-private-access-and-ssh.mdx', title: 'Private SSH access with Tailscale and 1Password', description: 'Private SSH access, verified host keys and separate Linux accounts, using Tailscale and 1Password.', part: 2, date: '2026-10-31' },
  { slug: 'private-vps-rootless-docker', file: '03-rootless-docker.mdx', title: 'Running development containers with rootless Docker', description: 'Run project containers as the development user, with writable files and enforced resource limits.', part: 3, date: '2026-10-31' },
  { slug: 'private-vps-rex-and-previews', file: '04-rex-and-private-previews.mdx', title: 'Using Rex and private previews from a Mac and iPhone', description: 'Connect Rex from a Mac and iPhone, then publish a private HTTPS application preview.', part: 4, date: '2026-10-31' },
  { slug: 'private-vps-secrets', file: '05-secrets-with-1password.mdx', title: 'Passing project secrets from 1Password to the VPS', description: 'Send one selected 1Password field to a VPS job over SSH, with a complete transport example.', part: 5, date: '2026-10-31' },
  { slug: 'private-vps-amp-deployments', file: '06-amp-runner-and-deployments.mdx', title: 'Deploying to the VPS with an Amp runner', description: 'Set up a persistent Amp runner and give it a practical procedure for private deployments.', part: 6, date: '2026-10-31' },
  { slug: 'private-vps-verification', file: '07-verification-and-recovery.mdx', title: 'Checking access, restarts and recovery', description: 'Check client access, application restarts and provider-console recovery after completing the setup.', part: 7, date: '2026-10-31' },
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
