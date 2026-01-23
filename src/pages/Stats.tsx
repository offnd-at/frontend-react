import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { LinkStats } from '../components/stats/LinkStats'

export function Stats() {
  const { pathname } = useLocation()
  const phrase = decodeURIComponent(pathname.substring(3))

  useEffect(() => {
    document.title = `offnd.at - /${phrase}`
  }, [phrase])

  return <LinkStats phrase={phrase} />
}
