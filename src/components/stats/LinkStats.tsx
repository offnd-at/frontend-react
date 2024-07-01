import { Stack, Skeleton, Typography, Box, SxProps, Theme } from '@mui/material'
import { Link } from '../../models/link'
import { OpenInNew } from '@mui/icons-material'
import { ApiError } from '../../models/apiError'
import { ErrorStack } from '../errors/ErrorStack'

interface LinkStatsProps {
  loading: boolean
  link?: Link
  errors?: ApiError[]
  sx?: SxProps<Theme>
}

export function LinkStats({ loading, link, errors, sx }: LinkStatsProps) {
  return (
    <Box sx={sx}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton
            variant='rectangular'
            height={24}
          />
          <Skeleton
            variant='rectangular'
            height={24}
          />
        </Stack>
      ) : Boolean(link) ? (
        <>
          <Box
            display='flex'
            alignItems='center'
            sx={{
              flexWrap: 'wrap',
              wordBreak: 'break-all',
            }}
          >
            <Typography variant='body1'>Target URL:</Typography>
            <a
              target='_blank'
              href={link?.targetUrl}
              style={{
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Typography variant='body1'>{link?.targetUrl}</Typography>
              <OpenInNew fontSize='small' />
            </a>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            sx={{
              mt: 4,
              flexWrap: 'wrap',
              wordBreak: 'break-all',
            }}
          >
            <Typography variant='body1'>Visits:&nbsp;</Typography>
            <Typography variant='body1'>{link?.visits}</Typography>
          </Box>
        </>
      ) : (
        <ErrorStack errors={errors} />
      )}
    </Box>
  )
}
