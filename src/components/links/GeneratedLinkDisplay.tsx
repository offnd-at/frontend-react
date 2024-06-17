import { Theme } from '@emotion/react'
import {
  Box,
  IconButton,
  Paper,
  Stack,
  SxProps,
  Typography,
} from '@mui/material'
import { ApiError } from '../../models/apiError'
import { ErrorStack } from '../errors/ErrorStack'
import { GenerateLinkResponse } from '../../models/responses/generateLinkResponse'
import { ContentCopy } from '@mui/icons-material'
import { useSnackbar } from 'notistack'

interface GeneratedLinkDisplayProps {
  response?: GenerateLinkResponse
  errors?: ApiError[]
  sx?: SxProps<Theme>
}

export function GeneratedLinkDisplay({
  response,
  errors,
  sx,
}: GeneratedLinkDisplayProps) {
  const { enqueueSnackbar } = useSnackbar()

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
            <Box>
              <Typography
                variant='subtitle1'
                fontWeight='bold'
                textAlign='center'
              >
                Your URL:
              </Typography>
              <Box
                alignItems='center'
                display='flex'
                justifyContent='center'
              >
                <a
                  target='_blank'
                  href={response?.url}
                >
                  <Typography>{response?.url}</Typography>
                </a>
                <IconButton
                  onClick={() => {
                    enqueueSnackbar('Copied to clipboard', {
                      key: 'copy-link',
                      autoHideDuration: 2000,
                      variant: 'info',
                    })
                    navigator.clipboard.writeText(response?.url ?? '')
                  }}
                >
                  <ContentCopy fontSize='small' />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Typography
                variant='subtitle1'
                fontWeight='bold'
                textAlign='center'
              >
                Stats for your URL:
              </Typography>
              <Box
                alignItems='center'
                display='flex'
                justifyContent='center'
              >
                <a
                  target='_blank'
                  href={response?.statsUrl}
                >
                  <Typography>{response?.statsUrl}</Typography>
                </a>
                <IconButton
                  onClick={() => {
                    enqueueSnackbar('Copied to clipboard', {
                      key: 'copy-stats-link',
                      autoHideDuration: 2000,
                      variant: 'info',
                    })
                    navigator.clipboard.writeText(response?.statsUrl ?? '')
                  }}
                >
                  <ContentCopy fontSize='small' />
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </Paper>
      )}
      {Boolean(errors?.length) && <ErrorStack errors={errors} />}
    </Box>
  )
}
