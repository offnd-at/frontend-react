import { Box, Button, Container, Paper, Typography, Collapse } from '@mui/material'
import { FallbackProps } from 'react-error-boundary'
import { useState } from 'react'
import { HeaderLogo } from '../layout/HeaderLogo'
import { KeyboardArrowDown, KeyboardArrowUp, Refresh } from '@mui/icons-material'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const [showDetails, setShowDetails] = useState(false)
  const isDevelopment = import.meta.env.MODE === 'development'

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          py: 4,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
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

          {isDevelopment && (
            <Box
              sx={{
                textAlign: 'left',
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: 2,
              }}
            >
              <Box display='flex' justifyContent='center' alignItems='center'>
                <Button
                  variant='text'
                  size='large'
                  endIcon={
                    showDetails ? (
                      <KeyboardArrowUp fontSize='small' />
                    ) : (
                      <KeyboardArrowDown fontSize='small' />
                    )
                  }
                  sx={{
                    borderRadius: 0,
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    border: '2px solid transparent',
                    color: 'primary.muted',
                    '&:hover': {
                      boxShadow: 'none',
                      bgcolor: 'transparent',
                      color: 'primary.main',
                    },
                  }}
                  disableElevation
                  disableRipple
                  onClick={() => setShowDetails(!showDetails)}
                >
                  {showDetails ? 'Hide Diagnostics' : 'Show Diagnostics'}
                </Button>
              </Box>
              <Collapse in={showDetails}>
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    bgcolor: 'action.hover',
                    maxHeight: 300,
                    overflow: 'auto',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant='body2'
                    color='error'
                    fontWeight='bold'
                    sx={{ mb: 1, fontFamily: 'inherit' }}
                  >
                    {error instanceof Error ? error.name : 'Error'}:{' '}
                    {error instanceof Error ? error.message : String(error)}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: 'text.secondary' }}
                  >
                    {error instanceof Error ? error.stack : ''}
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  )
}
