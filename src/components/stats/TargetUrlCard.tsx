import { ContentCopy, OpenInNew } from '@mui/icons-material'
import { Box, IconButton, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'

interface TargetUrlCardProps {
  loading: boolean
  targetUrl?: string
}

export function TargetUrlCard({ loading, targetUrl }: TargetUrlCardProps) {
  const { enqueueSnackbar } = useSnackbar()

  if (loading) {
    return <Skeleton variant='rectangular' height={80} sx={{ borderRadius: 2 }} />
  }

  return (
    <Paper
      variant='outlined'
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
        borderRadius: 0,
        bgcolor: 'action.hover',
      }}
    >
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography variant='h6' color='text.secondary' display='block' gutterBottom>
          Target URL
        </Typography>

        <Link
          to={targetUrl ?? ''}
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          <Stack direction='row' alignItems='center' spacing={1}>
            <Typography
              variant='body1'
              fontFamily='monospace'
              noWrap
              sx={{ fontWeight: 'medium' }}
              data-testid='target-url'
            >
              {targetUrl}
            </Typography>
            <OpenInNew fontSize='small' color='action' />
          </Stack>
        </Link>
      </Box>

      <IconButton
        aria-label='Copy target URL'
        onClick={() => {
          if (targetUrl) {
            enqueueSnackbar('Copied to clipboard', {
              autoHideDuration: 2000,
              variant: 'info',
            })
            navigator.clipboard.writeText(targetUrl)
          }
        }}
        size='large'
      >
        <ContentCopy />
      </IconButton>
    </Paper>
  )
}
