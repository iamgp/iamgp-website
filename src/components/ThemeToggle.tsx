import { HugeiconsIcon } from '@hugeicons/react'
import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { useTheme } from '@/components/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
    <HugeiconsIcon icon={isDark ? Sun03Icon : Moon02Icon} size={17} strokeWidth={1.7} aria-hidden="true" />
  </button>
}
