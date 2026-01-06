'use client'

import React, { useEffect } from 'react'
import { useThemeStore } from '@/lib/store/theme-store'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  return <>{children}</>
}

