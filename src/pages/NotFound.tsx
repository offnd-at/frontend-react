import { useLocation } from 'react-router-dom'

import { ApiErrorStack } from '../components/errors/ApiErrorStack'
import { redirectNotFound } from '../models/apiError'

export function NotFound() {
  const { pathname } = useLocation()

  return (
    <>
      <title>{`offnd.at - ${pathname}`}</title>
      <ApiErrorStack errors={[redirectNotFound(decodeURIComponent(pathname))]} />
    </>
  )
}
