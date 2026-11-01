import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

const preferenceKey = 'iamgp-theme'
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null)

// Apply a stored preference before the prerendered page paints.
export const themeBootstrapScript = `try{const saved=localStorage.getItem('${preferenceKey}');const theme=saved==='light'||saved==='dark'?saved:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{}`

function savedTheme() {
  try {
    return window.localStorage.getItem(preferenceKey)
  } catch {
    return null
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
    function syncTheme() {
      const saved = savedTheme()
      const next = saved === 'light' || saved === 'dark' ? saved : systemTheme.matches ? 'dark' : 'light'
      applyTheme(next)
      setTheme(next)
    }
    syncTheme()
    systemTheme.addEventListener('change', syncTheme)
    return () => systemTheme.removeEventListener('change', syncTheme)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
    try {
      window.localStorage.setItem(preferenceKey, next)
    } catch {
      // The current page can still change theme when browser storage is unavailable.
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme requires ThemeProvider')
  return context
}
