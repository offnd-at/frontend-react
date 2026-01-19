import { useQuery } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'

import { httpClient } from '../../http/httpClient'
import { GetLanguagesResponse } from '../../models/responses/getLanguagesResponse'
import { ProblemResponse } from '../../models/responses/problemResponse'

export function useGetLanguagesQuery() {
  return useQuery<AxiosResponse<GetLanguagesResponse>, AxiosError<ProblemResponse>>({
    queryKey: ['languages'],
    queryFn: () => httpClient.get<GetLanguagesResponse>('/languages'),
  })
}
