import { ContentCopy } from '@mui/icons-material'
import { Typography, IconButton, SxProps, Theme, Stack } from '@mui/material'
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
    <Stack sx={sx} spacing={0}>
      <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
        {title}
      </Typography>

      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{
          flexWrap: 'wrap',
          wordBreak: 'break-word',
        }}
        direction='row'
      >
        <Link to={url ?? ''} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography textAlign='center' variant='body1'>
            {url}
          </Typography>
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
      </Stack>
    </Stack>
  )
}
