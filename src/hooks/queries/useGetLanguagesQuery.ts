import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { httpClient } from '../../http/httpClient'
import { ProblemResponse } from '../../models/responses/problemResponse'
import { GetLanguagesResponse } from '../../models/responses/getLanguagesResponse'

export function useGetLanguagesQuery() {
  return useQuery<
    AxiosResponse<GetLanguagesResponse>,
    AxiosError<ProblemResponse>
  >({
    queryKey: ['languages'],
    queryFn: () => httpClient.get<GetLanguagesResponse>('/languages'),
  })
}
