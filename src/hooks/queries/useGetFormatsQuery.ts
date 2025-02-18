import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { httpClient } from '../../http/httpClient'
import { ProblemResponse } from '../../models/responses/problemResponse'
import { GetFormatsResponse } from '../../models/responses/getFormatsResponse'
import { first } from 'lodash'
import { useContext } from 'react'
import { SettingsContext } from '../../components/settings/SettingsContextProvider'

export function useGetFormatsQuery() {
  const { setSettingsContext } = useContext(SettingsContext)

  return useQuery<
    AxiosResponse<GetFormatsResponse>,
    AxiosError<ProblemResponse>
  >('formats', () => httpClient.get<GetFormatsResponse>('/formats'), {
    onSuccess: (data) =>
      setSettingsContext((prev) => ({
        ...prev,
        formatId: first(data.data.formats)?.value,
      })),
  })
}
