import { useMutation } from 'react-query'
import { GenerateLinkRequest } from '../../models/requests/generateLinkRequest'
import { httpClient } from '../../http/httpClient'
import { GenerateLinkResponse } from '../../models/responses/generateLinkResponse'
import { AxiosResponse, AxiosError } from 'axios'
import { ApiErrorResponse } from '../../models/responses/apiErrorResponse'

export function useGenerateLinkMutation(request: GenerateLinkRequest) {
  return useMutation<
    AxiosResponse<GenerateLinkResponse>,
    AxiosError<ApiErrorResponse>
  >(() => httpClient.post<GenerateLinkResponse>('/links/generate', request))
}
