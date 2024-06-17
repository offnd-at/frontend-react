import { ReactNode, createContext, useState } from 'react'

interface SettingsRecord {
  languageId?: number
  formatId?: number
  themeId?: number
}

interface SettingsContextState {
  settingsContext: SettingsRecord
  setSettingsContext: React.Dispatch<React.SetStateAction<SettingsRecord>>
}

interface SettingsContextProviderProps {
  children: ReactNode
}

export const SettingsContext = createContext<SettingsContextState>({
  settingsContext: {},
  setSettingsContext: () => {},
})

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [settingsContext, setSettingsContext] = useState<SettingsRecord>({})

  return (
    <SettingsContext.Provider value={{ settingsContext, setSettingsContext }}>
      {children}
    </SettingsContext.Provider>
  )
}
