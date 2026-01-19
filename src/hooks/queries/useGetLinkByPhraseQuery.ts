import { useQuery } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'

import { httpClient } from '../../http/httpClient'
import { GetLinkResponse } from '../../models/responses/getLinkResponse'
import { ProblemResponse } from '../../models/responses/problemResponse'

export function useGetLinkByPhraseQuery(phrase: string) {
  return useQuery<AxiosResponse<GetLinkResponse>, AxiosError<ProblemResponse>>({
    queryKey: ['link', phrase],
    queryFn: () => httpClient.get<GetLinkResponse>(`/links/${phrase}`),
    staleTime: 15 * 1000, // 15 seconds
  })
}
