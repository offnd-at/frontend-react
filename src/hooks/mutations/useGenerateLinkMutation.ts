import { useMutation } from '@tanstack/react-query'
import { GenerateLinkRequest } from '../../models/requests/generateLinkRequest'
import { httpClient } from '../../http/httpClient'
import { GenerateLinkResponse } from '../../models/responses/generateLinkResponse'
import { AxiosResponse, AxiosError } from 'axios'
import { ProblemResponse } from '../../models/responses/problemResponse'

export function useGenerateLinkMutation(request: GenerateLinkRequest) {
  return useMutation<
    AxiosResponse<GenerateLinkResponse>,
    AxiosError<ProblemResponse>
  >({
    mutationFn: () => httpClient.post<GenerateLinkResponse>('/links', request),
  })
}
