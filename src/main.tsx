import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ScrollToTop } from './components/ScrollToTop'
import { appTheme } from './themes/appTheme'
import { queryClient } from './http/queryClient'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack'

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
