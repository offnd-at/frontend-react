import { useQuery } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'

import { httpClient } from '../../http/httpClient'
import { GetFormatsResponse } from '../../models/responses/getFormatsResponse'
import { ProblemResponse } from '../../models/responses/problemResponse'

export function useGetFormatsQuery() {
  return useQuery<AxiosResponse<GetFormatsResponse>, AxiosError<ProblemResponse>>({
    queryKey: ['formats'],
    queryFn: () => httpClient.get<GetFormatsResponse>('/formats'),
  })
}
