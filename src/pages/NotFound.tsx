import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ApiErrorStack } from '../components/errors/ApiErrorStack'
import { redirectNotFound } from '../models/apiError'

export function NotFound() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = `offnd.at - ${pathname}`
  }, [pathname])

  return <ApiErrorStack errors={[redirectNotFound(decodeURIComponent(pathname))]} />
}
