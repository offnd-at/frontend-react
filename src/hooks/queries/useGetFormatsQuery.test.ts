import { renderHook, waitFor } from '@testing-library/react'
import { useGetFormatsQuery } from './useGetFormatsQuery'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('useGetFormatsQuery', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('fetches formats successfully', async () => {
    const { result } = renderHook(() => useGetFormatsQuery(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.data.formats).toHaveLength(2)
    expect(result.current.data?.data.formats[0]?.name).toBe('kebab-case')
  })
})
