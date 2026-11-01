import { useEffect, useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

let diagramSequence = 0
// Mermaid's configuration is global, so configure and render each diagram together.
let renderQueue = Promise.resolve()

export function MermaidDiagram({ source }: { source: string }) {
  const { theme } = useTheme()
  const [svg, setSvg] = useState('')
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    setFailed(false)
    async function draw() {
      try {
        const { default: mermaid } = await import('mermaid')
        const result = renderQueue.then(async () => {
          if (cancelled) return
          const styles = getComputedStyle(document.documentElement)
          const color = (name: string) => styles.getPropertyValue(name).trim()
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'strict',
            theme: 'base',
            look: 'classic',
            themeVariables: {
              darkMode: theme === 'dark',
              fontFamily: getComputedStyle(document.body).fontFamily,
              background: color('--preview'),
              primaryColor: color('--page'),
              primaryTextColor: color('--ink'),
              primaryBorderColor: color('--quiet'),
              lineColor: color('--body'),
              textColor: color('--ink'),
              edgeLabelBackground: color('--preview'),
            },
          })
          return mermaid.render(`blog-diagram-${++diagramSequence}`, source)
        })
        renderQueue = result.then(() => undefined, () => undefined)
        const rendered = await result
        if (!cancelled && rendered) setSvg(rendered.svg)
      } catch {
        if (!cancelled) setFailed(true)
      }
    }
    void draw()
    return () => { cancelled = true }
  }, [source, theme])

  if (!svg) {
    return <figure className="article-diagram">
      <figcaption>{failed ? 'Diagram source. The diagram could not be drawn in this browser.' : 'Architecture diagram source'}</figcaption>
      <pre tabIndex={0}><code>{source}</code></pre>
    </figure>
  }

  return <figure className="article-diagram">
    <div className="article-diagram-svg" role="img" aria-label="Private development VPS architecture" tabIndex={0} dangerouslySetInnerHTML={{ __html: svg }} />
    <figcaption>Private development VPS connections</figcaption>
  </figure>
}
