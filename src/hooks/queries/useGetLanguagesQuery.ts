import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { httpClient } from '../../http/httpClient'
import { ProblemResponse } from '../../models/responses/problemResponse'
import { GetLanguagesResponse } from '../../models/responses/getLanguagesResponse'
import { useContext } from 'react'
import { SettingsContext } from '../../components/settings/SettingsContextProvider'
import { first } from 'lodash'

export function useGetLanguagesQuery() {
  const { setSettingsContext } = useContext(SettingsContext)

  return useQuery<
    AxiosResponse<GetLanguagesResponse>,
    AxiosError<ProblemResponse>
  >('languages', () => httpClient.get<GetLanguagesResponse>('/languages'), {
    onSuccess: (data) =>
      setSettingsContext((prev) => ({
        ...prev,
        languageId: first(data.data.languages)?.value,
      })),
  })
}
