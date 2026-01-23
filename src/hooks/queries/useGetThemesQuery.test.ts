import { renderHook, waitFor } from '@testing-library/react'
import { useGetThemesQuery } from './useGetThemesQuery'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('useGetThemesQuery', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('fetches themes successfully', async () => {
    const { result } = renderHook(() => useGetThemesQuery(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.data.themes).toHaveLength(3)
    expect(result.current.data?.data.themes[0]?.name).toBe('none')
  })
})
