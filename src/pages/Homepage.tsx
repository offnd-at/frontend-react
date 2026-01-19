import { useEffect } from 'react'

import { GenerateUrlCard } from '../components/links/GenerateUrlCard'

export function Homepage() {
  useEffect(() => {
    document.title = `offnd.at - share the offensiveness`
  }, [])

  return <GenerateUrlCard />
}
