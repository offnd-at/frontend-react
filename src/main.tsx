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
import { QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'
import { SettingsContextProvider } from './components/settings/SettingsContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <ThemeProvider theme={appTheme}>
          <SettingsContextProvider>
            <CssBaseline />
            <BrowserRouter>
              <ScrollToTop />
              <App />
            </BrowserRouter>
          </SettingsContextProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
