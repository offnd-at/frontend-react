import { ContentCopy } from '@mui/icons-material'
import { Box, Typography, IconButton, SxProps, Theme } from '@mui/material'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'

interface LinkDisplayProps {
  title?: string
  url?: string
  sx?: SxProps<Theme>
}

export function LinkDisplay({ title, url, sx }: LinkDisplayProps) {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Box sx={sx}>
      <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
        {title}
      </Typography>
      <Box
        alignItems='center'
        display='flex'
        justifyContent='center'
        sx={{
          flexWrap: 'wrap',
          wordBreak: 'break-word',
        }}
      >
        <Link to={url ?? ''} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography textAlign='center'>{url}</Typography>
        </Link>
        <IconButton
          data-testid='copy-button'
          onClick={() => {
            enqueueSnackbar('Copied to clipboard', {
              autoHideDuration: 2000,
              variant: 'info',
            })
            navigator.clipboard.writeText(url ?? '')
          }}
        >
          <ContentCopy fontSize='small' />
        </IconButton>
      </Box>
    </Box>
  )
}
