import { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: unknown) => {
        if (error instanceof AxiosError) {
          return failureCount < 3 && (!error.response?.status || error.response.status >= 500)
        }
        return failureCount < 3
      },
    },
  },
})
