import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: any) => {
        return (
          failureCount < 3 &&
          (!Boolean(error?.response?.status) || error?.response?.status >= 500)
        )
      },
    },
  },
})
