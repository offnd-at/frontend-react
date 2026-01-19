import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { LinkStats } from '../components/stats/LinkStats'
import { LinkStatsHeader } from '../components/stats/LinkStatsHeader'
import { useGetLinkByPhraseQuery } from '../hooks/queries/useGetLinkByPhraseQuery'

export function Stats() {
  const { pathname } = useLocation()
  const phrase = decodeURIComponent(pathname.substring(3))

  const { data, error, isFetching } = useGetLinkByPhraseQuery(phrase)

  useEffect(() => {
    document.title = `offnd.at - /${phrase}`
  }, [phrase])

  return (
    <>
      <LinkStatsHeader phrase={phrase} />
      <LinkStats
        sx={{
          my: 8,
        }}
        loading={isFetching}
        link={data?.data.link}
        errors={error?.response?.data?.errors}
      />
    </>
  )
}
