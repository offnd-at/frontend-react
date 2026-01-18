import { useSettingsStore } from '../stores/settingsStore'
import { useGetLanguagesQuery } from '../hooks/queries/useGetLanguagesQuery'
import { useGetFormatsQuery } from '../hooks/queries/useGetFormatsQuery'
import { useGetThemesQuery } from '../hooks/queries/useGetThemesQuery'
import { first } from 'lodash'

export function useAppliedSettings() {
  const { languageId, formatId, themeId } = useSettingsStore()
  
  const { data: languagesData } = useGetLanguagesQuery()
  const { data: formatsData } = useGetFormatsQuery()
  const { data: themesData } = useGetThemesQuery()

  return {
    languageId: languageId ?? first(languagesData?.data.languages)?.value,
    formatId: formatId ?? first(formatsData?.data.formats)?.value,
    themeId: themeId ?? first(themesData?.data.themes)?.value,
  }
}
