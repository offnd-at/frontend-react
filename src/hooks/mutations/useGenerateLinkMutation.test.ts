import { renderHook, waitFor } from '@testing-library/react'
import { useGenerateLinkMutation } from './useGenerateLinkMutation'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('useGenerateLinkMutation', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('generates a link successfully', async () => {
    const request = {
      targetUrl: 'https://example.com',
      formatId: 0,
      languageId: 0,
      themeId: 0,
    }
    const { result } = renderHook(() => useGenerateLinkMutation(request), { wrapper })

    result.current.mutate()

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.data.url).toBe('http://offnd.at/test-phrase')
  })
})
