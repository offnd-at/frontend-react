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
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active':
            {
              WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.paper} inset !important`,
              WebkitTextFillColor: `${theme.palette.text.primary} !important`,
            },
        }),
      },
    },
  },
})
