type ArticleIllustrationProps = {
  src: string
  alt: string
  caption: string
}

export function ArticleIllustration({ src, alt, caption }: ArticleIllustrationProps) {
  return <figure className="article-illustration">
    <a className="article-illustration-link" href={src} aria-label={`View full-size drawing: ${alt}`}>
      <img src={src} alt={alt} width={1700} height={1060} loading="lazy" decoding="async" />
    </a>
    <figcaption>{caption} <a href={src}>View full-size drawing</a></figcaption>
  </figure>
}
