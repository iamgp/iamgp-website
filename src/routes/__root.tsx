/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import globalCss from '@/styles/global.css?url'
import { ThemeProvider, themeBootstrapScript } from '@/components/ThemeProvider'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: globalCss },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <HeadContent />
      </head>
      <body>
        <div className="page-effects" aria-hidden="true">
          <div className="page-grid" />
          <div className="page-glow page-glow-a" />
          <div className="page-glow page-glow-b" />
        </div>
        <ThemeProvider>
          <main>
            {children}
          </main>
          <footer>© gareth price · oxford, uk</footer>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
