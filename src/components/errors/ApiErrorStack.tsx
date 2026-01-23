import { Stack, Alert, SxProps, Theme } from '@mui/material'

import { ApiError, unexpectedError } from '../../models/apiError'

interface ApiErrorStackProps {
  errors?: ApiError[]
  sx?: SxProps<Theme>
}

export function ApiErrorStack({ errors, sx }: ApiErrorStackProps) {
  return (
    <Stack spacing={1} sx={sx}>
      {(errors ?? [unexpectedError]).map((error) => (
        <Alert
          data-testid='error-alert'
          key={error.code}
          variant='filled'
          severity='error'
          sx={{ borderRadius: 0 }}
        >
          {error.message}
        </Alert>
      ))}
    </Stack>
  )
}
