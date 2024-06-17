import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
