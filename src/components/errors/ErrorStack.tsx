import { Stack, Alert, SxProps, Theme, Box } from '@mui/material'

import { ApiError, unexpectedError } from '../../models/apiError'

interface ErrorStackProps {
  errors?: ApiError[]
  sx?: SxProps<Theme>
}

export function ErrorStack({ errors, sx }: ErrorStackProps) {
  return (
    <Box sx={sx}>
      <Stack spacing={2}>
        {(errors ?? [unexpectedError]).map((error) => (
          <Alert key={error.code} variant='filled' severity='error'>
            {error.message}
          </Alert>
        ))}
      </Stack>
    </Box>
  )
}
