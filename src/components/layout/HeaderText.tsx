import { Box, SxProps, Theme, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface HeaderTextProps {
  sx?: SxProps<Theme>
}

export function HeaderText({ sx }: HeaderTextProps) {
  return (
    <Box sx={sx}>
      <Link to='/'>
        <Typography
          display='flex'
          color='primary'
          variant='h2'
          fontWeight='bold'
        >
          offnd.at
        </Typography>
      </Link>
    </Box>
  )
}
