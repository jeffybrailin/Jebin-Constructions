'use client'

import React from 'react'
import { useThemeStore } from '@/lib/store/theme-store'
import { Tooltip } from './ui/Tooltip'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <Tooltip content={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-bg-secondary hover:bg-opacity-80 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <span className="text-2xl">☀️</span>
        ) : (
          <span className="text-2xl">🌙</span>
        )}
      </button>
    </Tooltip>
  )
}

