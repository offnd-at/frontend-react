import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { httpClient } from '../../http/httpClient'
import { GetLinkResponse } from '../../models/responses/getLinkResponse'
import { ApiErrorResponse } from '../../models/responses/apiErrorResponse'

export function useGetLinkByPhraseQuery(phrase: string) {
  return useQuery<AxiosResponse<GetLinkResponse>, AxiosError<ApiErrorResponse>>(
    ['link', phrase],
    () => httpClient.get<GetLinkResponse>(`/links/${phrase}`)
  )
}
