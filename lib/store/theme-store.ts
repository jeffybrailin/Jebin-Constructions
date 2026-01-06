import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => {
        set({ theme })
        if (typeof window !== 'undefined') {
          document.documentElement.classList.remove('light', 'dark')
          document.documentElement.classList.add(theme)
        }
      },
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light'
          if (typeof window !== 'undefined') {
            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(newTheme)
          }
          return { theme: newTheme }
        })
      },
    }),
    {
      name: 'theme-storage',
    }
  )
)

