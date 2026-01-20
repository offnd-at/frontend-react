import { renderHook, waitFor } from '@testing-library/react'
import { useGetLinkByPhraseQuery } from './useGetLinkByPhraseQuery'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('useGetLinkByPhraseQuery', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('fetches link details successfully', async () => {
    const { result } = renderHook(() => useGetLinkByPhraseQuery('test-phrase'), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.data.phrase).toBe('test-phrase')
    expect(result.current.data?.data.targetUrl).toBe('https://example.com')
  })
})
