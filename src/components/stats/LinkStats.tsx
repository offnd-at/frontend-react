import { Box, Grid, Stack, SxProps, Theme } from '@mui/material'
import { ApiErrorStack } from '../errors/ApiErrorStack'
import { TotalVisitsCard } from './TotalVisitsCard'
import { DetailsCard } from './DetailsCard'
import { LastVisitCard } from './LastVisitCard'
import { TargetUrlCard } from './TargetUrlCard'
import { RecentTrafficList } from './RecentTrafficList'
import { useGetLinkByPhraseQuery } from '@/hooks/queries/useGetLinkByPhraseQuery'
import { LinkStatsHeader } from './LinkStatsHeader'
import { unexpectedError } from '@/models/apiError'

interface LinkStatsProps {
  phrase: string
  sx?: SxProps<Theme>
}

export function LinkStats({ phrase, sx }: LinkStatsProps) {
  const { data, error, isFetching } = useGetLinkByPhraseQuery(phrase)

  const errors = error?.response?.data?.errors
  const linkResponse = data?.data

  if (!isFetching && !linkResponse) {
    return (
      <Box sx={sx}>
        <ApiErrorStack errors={errors ?? [unexpectedError]} />
      </Box>
    )
  }

  return (
    <Stack sx={sx} spacing={4}>
      <LinkStatsHeader phrase={phrase} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TotalVisitsCard loading={isFetching} visits={linkResponse?.visits} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <DetailsCard
            loading={isFetching}
            languageId={linkResponse?.languageId}
            themeId={linkResponse?.themeId}
            createdAt={linkResponse?.createdAt}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <LastVisitCard loading={isFetching} lastVisit={linkResponse?.recentVisits?.[0]} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TargetUrlCard loading={isFetching} targetUrl={linkResponse?.targetUrl} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <RecentTrafficList loading={isFetching} recentVisits={linkResponse?.recentVisits ?? []} />
        </Grid>
      </Grid>
    </Stack>
  )
}
