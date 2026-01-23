import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Collapse, Typography } from '@mui/material'
import { useState } from 'react'
import { FallbackProps } from 'react-error-boundary'

export function ErrorCallStack({ error }: Omit<FallbackProps, 'resetErrorBoundary'>) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Box textAlign='left' borderTop='1px solid' borderColor='divider' pt={2}>
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
          mt={2}
          p={2}
          bgcolor='action.hover'
          maxHeight={300}
          overflow='auto'
          fontFamily='monospace'
          fontSize='0.75rem'
          border='1px solid'
          borderColor='divider'
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
  )
}
