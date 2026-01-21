import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { ErrorFallback } from './components/errors/ErrorFallback'
import { ScrollToTop } from './components/ScrollToTop'
import { queryClient } from './http/queryClient'
import { appTheme } from './themes/appTheme'
import { ErrorBoundary } from 'react-error-boundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              queryClient.clear()
              window.location.href = '/'
            }}
          >
            <BrowserRouter>
              <ScrollToTop />
              <App />
            </BrowserRouter>
          </ErrorBoundary>
        </ThemeProvider>
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
