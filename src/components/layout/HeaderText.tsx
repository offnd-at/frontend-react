import { Box, SxProps, Theme, Typography } from '@mui/material'

interface HeaderTextProps {
  sx?: SxProps<Theme>
}

export function HeaderText({ sx }: HeaderTextProps) {
  return (
    <Box sx={sx}>
      <Typography
        display='flex'
        color='primary'
        variant='h2'
        fontWeight='bold'
      >
        offnd.at
      </Typography>
    </Box>
  )
}
