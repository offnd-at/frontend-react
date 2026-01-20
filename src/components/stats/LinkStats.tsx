import { OpenInNew } from '@mui/icons-material'
import { Stack, Skeleton, Typography, Box, SxProps, Theme } from '@mui/material'
import { Link } from 'react-router-dom'
import { GetLinkResponse } from '@/models/responses/getLinkResponse'
import { ApiError } from '../../models/apiError'
import { ErrorStack } from '../errors/ErrorStack'

interface LinkStatsProps {
  loading: boolean
  linkResponse?: GetLinkResponse
  errors?: ApiError[]
  sx?: SxProps<Theme>
}

export function LinkStats({ loading, linkResponse, errors, sx }: LinkStatsProps) {
  return (
    <Box sx={sx}>
      {loading ? (
        <Stack spacing={2}>
          <Skeleton data-testid='loading-skeleton' variant='rectangular' height={24} />
          <Skeleton data-testid='loading-skeleton' variant='rectangular' height={24} />
        </Stack>
      ) : linkResponse ? (
        <Stack spacing={2}>
          <Box
            display='flex'
            alignItems='center'
            sx={{
              flexWrap: 'wrap',
              wordBreak: 'break-all',
            }}
          >
            <Stack direction='row' spacing={1} alignItems='center'>
              <Typography variant='body1'>Target URL:</Typography>
              <Link
                target='_blank'
                to={linkResponse?.targetUrl ?? ''}
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                rel='noreferrer'
              >
                <Stack direction='row' spacing={0.5} alignItems='center'>
                  <Typography variant='body1' data-testid='target-url'>
                    {linkResponse?.targetUrl}
                  </Typography>
                  <Box display='flex'>
                    <OpenInNew fontSize='small' />
                  </Box>
                </Stack>
              </Link>
            </Stack>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            sx={{
              flexWrap: 'wrap',
              wordBreak: 'break-all',
            }}
          >
            <Stack direction='row' spacing={1} alignItems='center'>
              <Typography variant='body1'>Visits:</Typography>
              <Typography variant='body1' data-testid='visits-count'>
                {linkResponse?.visits}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <ErrorStack errors={errors} />
      )}
    </Box>
  )
}
