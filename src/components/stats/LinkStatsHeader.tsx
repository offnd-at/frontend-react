import { SxProps, Theme, Typography } from '@mui/material'

interface LinkStatsHeaderProps {
  phrase: string
  sx?: SxProps<Theme>
}

export function LinkStatsHeader({ phrase, sx }: LinkStatsHeaderProps) {
  return (
    <Typography variant='h6' fontWeight='bold' sx={sx}>
      /{phrase}
    </Typography>
  )
}
