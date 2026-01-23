import { useEffect } from 'react'

import { LinkGenerator } from '../components/links/LinkGenerator'

export function Homepage() {
  useEffect(() => {
    document.title = `offnd.at - share the offensiveness`
  }, [])

  return <LinkGenerator />
}
