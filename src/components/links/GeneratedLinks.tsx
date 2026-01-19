import { Theme } from '@emotion/react'
import { Box, Paper, Stack, SxProps } from '@mui/material'

import { LinkDisplay } from './LinkDisplay'
import { ApiError } from '../../models/apiError'
import { GenerateLinkResponse } from '../../models/responses/generateLinkResponse'
import { ErrorStack } from '../errors/ErrorStack'

interface GeneratedLinksProps {
  response?: GenerateLinkResponse
  errors?: ApiError[]
  sx?: SxProps<Theme>
}

export function GeneratedLinks({ response, errors, sx }: GeneratedLinksProps) {
  return (
    <Box sx={sx}>
      {Boolean(response) && (
        <Paper
          sx={{
            borderRadius: 0,
            p: 2,
          }}
        >
          <Stack spacing={2}>
            <LinkDisplay title='Your URL:' url={response?.url} />
            <LinkDisplay title='Stats for your URL:' url={response?.statsUrl} />
          </Stack>
        </Paper>
      )}
      {Boolean(errors?.length) && <ErrorStack errors={errors} />}
    </Box>
  )
}
