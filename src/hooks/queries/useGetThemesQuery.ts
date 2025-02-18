import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { httpClient } from '../../http/httpClient'
import { ProblemResponse } from '../../models/responses/problemResponse'
import { GetThemesResponse } from '../../models/responses/getThemesResponse'
import { useContext } from 'react'
import { SettingsContext } from '../../components/settings/SettingsContextProvider'
import { first } from 'lodash'

export function useGetThemesQuery() {
  const { setSettingsContext } = useContext(SettingsContext)

  return useQuery<
    AxiosResponse<GetThemesResponse>,
    AxiosError<ProblemResponse>
  >('themes', () => httpClient.get<GetThemesResponse>('/themes'), {
    onSuccess: (data) =>
      setSettingsContext((prev) => ({
        ...prev,
        themeId: first(data.data.themes)?.value,
      })),
  })
}
