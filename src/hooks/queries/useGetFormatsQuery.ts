import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { httpClient } from '../../http/httpClient'
import { ProblemResponse } from '../../models/responses/problemResponse'
import { GetFormatsResponse } from '../../models/responses/getFormatsResponse'

export function useGetFormatsQuery() {
  return useQuery<
    AxiosResponse<GetFormatsResponse>,
    AxiosError<ProblemResponse>
  >({
    queryKey: ['formats'],
    queryFn: () => httpClient.get<GetFormatsResponse>('/formats'),
  })
}
