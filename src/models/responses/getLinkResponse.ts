import { LinkVisit } from '../linkVisit'

export type GetLinkResponse = {
  id: string
  phrase: string
  targetUrl: string
  languageId: number
  themeId: number
  visits: number
  recentVisits: LinkVisit[]
  createdAt: Date
}
