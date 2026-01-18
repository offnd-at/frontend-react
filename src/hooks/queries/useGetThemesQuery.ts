import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { httpClient } from '../../http/httpClient'
import { ProblemResponse } from '../../models/responses/problemResponse'
import { GetThemesResponse } from '../../models/responses/getThemesResponse'

export function useGetThemesQuery() {
  return useQuery<
    AxiosResponse<GetThemesResponse>,
    AxiosError<ProblemResponse>
  >({
    queryKey: ['themes'],
    queryFn: () => httpClient.get<GetThemesResponse>('/themes'),
  })
}
