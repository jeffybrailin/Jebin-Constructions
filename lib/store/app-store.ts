import { create } from 'zustand'

interface AppState {
  isLoading: boolean
  error: string | null
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  showOnboarding: boolean
  setShowOnboarding: (show: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  error: null,
  showOnboarding: false,
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setShowOnboarding: (show) => set({ showOnboarding: show }),
}))

