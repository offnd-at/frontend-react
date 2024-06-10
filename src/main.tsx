import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollToTop from './components/ScrollToTop'
import appTheme from './themes/appTheme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'

const queryClient = new QueryClient({
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
