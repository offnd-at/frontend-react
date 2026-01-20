import { renderHook, waitFor } from '@testing-library/react'
import { useGetLanguagesQuery } from './useGetLanguagesQuery'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('useGetLanguagesQuery', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('fetches languages successfully', async () => {
    const { result } = renderHook(() => useGetLanguagesQuery(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.data.languages).toHaveLength(2)
    expect(result.current.data?.data.languages[0]?.name).toBe('English')
  })
})
