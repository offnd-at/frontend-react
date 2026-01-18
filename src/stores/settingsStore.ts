import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  languageId?: number
  formatId?: number
  themeId?: number
  setLanguageId: (id: number) => void
  setFormatId: (id: number) => void
  setThemeId: (id: number) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      languageId: undefined,
      formatId: undefined,
      themeId: undefined,
      setLanguageId: (id) => set({ languageId: id }),
      setFormatId: (id) => set({ formatId: id }),
      setThemeId: (id) => set({ themeId: id }),
    }),
    {
      name: 'settings-storage',
    }
  )
)
