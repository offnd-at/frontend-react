import { Refresh } from '@mui/icons-material'
import { Box, Button, Container, Paper, Typography, Stack } from '@mui/material'
import { FallbackProps } from 'react-error-boundary'
import { ErrorCallStack } from './ErrorCallStack'
import { HeaderLogo } from '../layout/HeaderLogo'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const isDevelopment = import.meta.env.MODE === 'development'

  return (
    <Container maxWidth='sm'>
      <Stack alignItems='center' justifyContent='center' minHeight='100vh' py={4}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            border: '2px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
          }}
          square
        >
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
            <HeaderLogo />
          </Box>

          <Typography
            variant='h4'
            fontWeight='900'
            gutterBottom
            sx={{ textTransform: 'uppercase' }}
          >
            System Malfunction
          </Typography>

          <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
            We encountered an unexpected error. Looks like you need to refresh the page now, sorry.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: isDevelopment ? 4 : 0 }}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              startIcon={<Refresh />}
              onClick={resetErrorBoundary}
              sx={{
                borderRadius: 0,
                fontWeight: 'bold',
                boxShadow: 'none',
                border: '2px solid transparent',
                '&:hover': {
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                  color: 'primary.main',
                  borderColor: 'primary.main',
                },
              }}
              disableElevation
            >
              Refresh
            </Button>
          </Box>

          {isDevelopment && <ErrorCallStack error={error} />}
        </Paper>
      </Stack>
    </Container>
  )
}
