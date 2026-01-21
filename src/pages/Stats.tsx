import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { LinkStats } from '../components/stats/LinkStats'
import { LinkStatsHeader } from '../components/stats/LinkStatsHeader'
import { useGetLinkByPhraseQuery } from '../hooks/queries/useGetLinkByPhraseQuery'
import { Stack } from '@mui/material'

export function Stats() {
  const { pathname } = useLocation()
  const phrase = decodeURIComponent(pathname.substring(3))

  const { data, error, isFetching } = useGetLinkByPhraseQuery(phrase)

  useEffect(() => {
    document.title = `offnd.at - /${phrase}`
  }, [phrase])

  return (
    <Stack spacing={4}>
      <LinkStatsHeader phrase={phrase} />
      <LinkStats
        loading={isFetching}
        linkResponse={data?.data}
        errors={error?.response?.data?.errors}
      />
    </Stack>
  )
}
