import { act, renderHook } from '@testing-library/react'
import { useSettingsStore } from './settingsStore'

describe('settingsStore', () => {
  beforeEach(() => {
    act(() => {
      useSettingsStore.setState({
        languageId: undefined,
        formatId: undefined,
        themeId: undefined,
      })
    })
    localStorage.clear()
  })

  it('initializes with undefined values', () => {
    const { result } = renderHook(() => useSettingsStore())
    expect(result.current.languageId).toBeUndefined()
    expect(result.current.formatId).toBeUndefined()
    expect(result.current.themeId).toBeUndefined()
  })

  it('updates languageId correctly', () => {
    const { result } = renderHook(() => useSettingsStore())
    act(() => {
      result.current.setLanguageId(1)
    })
    expect(result.current.languageId).toBe(1)
  })

  it('updates formatId correctly', () => {
    const { result } = renderHook(() => useSettingsStore())
    act(() => {
      result.current.setFormatId(0)
    })
    expect(result.current.formatId).toBe(0)
  })

  it('updates themeId correctly', () => {
    const { result } = renderHook(() => useSettingsStore())
    act(() => {
      result.current.setThemeId(2)
    })
    expect(result.current.themeId).toBe(2)
  })
})
