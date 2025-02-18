import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { httpClient } from '../../http/httpClient'
import { GetLinkResponse } from '../../models/responses/getLinkResponse'
import { ProblemResponse } from '../../models/responses/problemResponse'

export function useGetLinkByPhraseQuery(phrase: string) {
  return useQuery<AxiosResponse<GetLinkResponse>, AxiosError<ProblemResponse>>(
    ['link', phrase],
    () => httpClient.get<GetLinkResponse>(`/links/${phrase}`)
  )
}
