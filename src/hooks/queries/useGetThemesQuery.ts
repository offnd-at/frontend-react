import { useQuery } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'

import { httpClient } from '../../http/httpClient'
import { GetThemesResponse } from '../../models/responses/getThemesResponse'
import { ProblemResponse } from '../../models/responses/problemResponse'

export function useGetThemesQuery() {
  return useQuery<AxiosResponse<GetThemesResponse>, AxiosError<ProblemResponse>>({
    queryKey: ['themes'],
    queryFn: () => httpClient.get<GetThemesResponse>('/themes'),
  })
}
