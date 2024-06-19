import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ErrorStack } from '../components/errors/ErrorStack'
import { redirectNotFound } from '../models/apiError'

export function NotFound() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = `offnd.at - ${pathname}`
  }, [])

  return (
    <ErrorStack errors={[redirectNotFound(decodeURIComponent(pathname))]} />
  )
}
