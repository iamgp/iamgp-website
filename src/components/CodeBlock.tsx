import { isValidElement, useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react'

const commandLanguages = new Set(['sh', 'bash', 'shell'])
const configurationLanguages = new Set(['sshconfig', 'toml', 'ini', 'dockerfile', 'yaml', 'sudoers', 'markdown', 'json'])

export function CodeBlock({ children, ...props }: ComponentPropsWithoutRef<'pre'>) {
  const code = isValidElement<{ className?: string }>(children) ? children : undefined
  const language = code?.props.className?.match(/\blanguage-([\w-]+)/)?.[1] ?? ''
  const copyable = commandLanguages.has(language) || configurationLanguages.has(language)
  const pre = useRef<HTMLPreElement>(null)
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const [copying, setCopying] = useState(false)

  useEffect(() => {
    if (status !== 'copied') return
    const timer = setTimeout(() => setStatus('idle'), 2000)
    return () => clearTimeout(timer)
  }, [status])

  async function copy() {
    setCopying(true)
    setStatus('idle')
    try {
      const text = pre.current?.textContent
      if (!text) throw new Error('No code to copy')
      await navigator.clipboard.writeText(text)
      setStatus('copied')
    } catch {
      setStatus('error')
    } finally {
      setCopying(false)
    }
  }

  const block = <pre {...props} ref={pre} tabIndex={0}>{children}</pre>
  if (!copyable) return block

  return <div className="code-block">
    <div className="code-block-toolbar">
      <span className="code-copy-status" role="status">
        {status === 'copied' ? 'Copied' : status === 'error' ? 'Copy failed. Select the text to copy it.' : ''}
      </span>
      <button className="code-copy-button" type="button" onClick={copy} disabled={copying}
        aria-label={commandLanguages.has(language) ? 'Copy commands' : language === 'markdown' ? 'Copy instructions' : 'Copy configuration'}>
        {copying ? 'Copying...' : 'Copy'}
      </button>
    </div>
    {block}
  </div>
}
