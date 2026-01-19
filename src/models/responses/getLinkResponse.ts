import { LinkVisit } from '../linkVisit'

export type GetLinkResponse = {
  id: string
  phrase: string
  targetUrl: string
  visits: number
  recentVisits: LinkVisit[]
  createdAt: Date
}
