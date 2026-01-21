import { alpha, createTheme } from '@mui/material'

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f17e0b',
      muted: alpha('#f17e0b', 0.6),
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
})
