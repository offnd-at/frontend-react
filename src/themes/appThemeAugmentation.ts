import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteColor {
    muted?: string
  }

  interface SimplePaletteColorOptions {
    muted?: string
  }
}
