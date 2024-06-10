import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import httpClient from '../http/httpClient'
import { useQuery } from 'react-query'
import { GetLinkResponse } from '../models/responses/getLinkResponse'

function Homepage() {
  const { pathname } = useLocation()
  const phrase = decodeURIComponent(pathname.substring(3))

  const { data, isFetching, error } = useQuery(['link', phrase], () =>
    httpClient.get<GetLinkResponse>(`/links/${phrase}`)
  )

  useEffect(() => {
    document.title = `offnd.at - /${phrase}`
  }, [])

  return (
    <>
      <Typography
        variant='h6'
        fontWeight='bold'
        sx={{
          mb: 2,
        }}
      >
        /{phrase}
      </Typography>
      <Typography variant='body1'>
        Target URL:{' '}
        <a
          target='_blank'
          href={data?.data.link.targetUrl}
        >
          {data?.data.link.targetUrl}
        </a>
      </Typography>
      <Typography
        variant='body1'
        sx={{
          mb: 4,
        }}
      >
        Visits: {data?.data.link.visits}
      </Typography>
      <Link to='/'>Go home</Link>
    </>
  )
}

export default Homepage
