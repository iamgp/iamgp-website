import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'

type ArticleIllustrationProps = {
  src: string
  alt: string
  caption: string
}

export function ArticleIllustration({ src, alt, caption }: ArticleIllustrationProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const fullSizeSrc = mounted ? `${src}#${theme}` : src

  return <figure className="article-illustration">
    <a className="article-illustration-link" href={fullSizeSrc} aria-label={`View full-size drawing: ${alt}`}>
      <img src={src} alt={alt} width={1700} height={1060} loading="lazy" decoding="async" />
    </a>
    <figcaption>{caption} <a href={fullSizeSrc}>View full-size drawing</a></figcaption>
  </figure>
}
