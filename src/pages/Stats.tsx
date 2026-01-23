import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { LinkStats } from '../components/stats/LinkStats'

export function Stats() {
  const { phrase } = useParams<{ phrase: string }>()
  const decodedPhrase = decodeURIComponent(phrase ?? '')

  useEffect(() => {
    document.title = `offnd.at - /${decodedPhrase}`
  }, [decodedPhrase])

  return <LinkStats phrase={decodedPhrase} />
}
