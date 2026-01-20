import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react'
import { useAppliedSettings } from './useAppliedSettings'
import { useSettingsStore } from '../stores/settingsStore'
import { createTestQueryClient, createWrapper } from '../test/utils'

describe('useAppliedSettings', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  beforeEach(() => {
    queryClient.clear()
    act(() => {
      useSettingsStore.setState({
        languageId: undefined,
        formatId: undefined,
        themeId: undefined,
      })
    })
  })

  it('returns default values when store is empty', async () => {
    const { result } = renderHook(() => useAppliedSettings(), { wrapper })

    await waitFor(() => {
      expect(result.current.languageId).toBe(0) // Default from MSW mock (first item)
      expect(result.current.formatId).toBe(0) // Default from MSW mock (first item)
      expect(result.current.themeId).toBe(0) // Default from MSW mock (first item)
    })
  })

  it('returns overriding values from store', async () => {
    act(() => {
      useSettingsStore.setState({
        languageId: 1,
        formatId: 1,
        themeId: 1,
      })
    })

    const { result } = renderHook(() => useAppliedSettings(), { wrapper })

    await waitFor(() => {
      expect(result.current.languageId).toBe(1)
      expect(result.current.formatId).toBe(1)
      expect(result.current.themeId).toBe(1)
    })
  })
})
