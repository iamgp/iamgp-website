import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'

type Theme = 'light' | 'dark'

const preferenceKey = 'iamgp-theme'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(preferenceKey)
    const nextTheme: Theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    applyTheme(nextTheme)
    setTheme(nextTheme)
  }, [])

  function toggleTheme() {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
    window.localStorage.setItem(preferenceKey, nextTheme)
    setTheme(nextTheme)
  }

  const isDark = theme === 'dark'

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
    <HugeiconsIcon icon={isDark ? Sun03Icon : Moon02Icon} size={17} strokeWidth={1.7} aria-hidden="true" />
  </button>
}
