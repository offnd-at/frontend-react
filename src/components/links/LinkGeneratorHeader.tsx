import { SxProps, Theme, Typography } from '@mui/material'

interface LinkGeneratorHeaderProps {
  sx?: SxProps<Theme>
}

export function LinkGeneratorHeader({ sx }: LinkGeneratorHeaderProps) {
  return (
    <Typography variant='h6' fontWeight='bold' sx={sx}>
      Generate a link
    </Typography>
  )
}
