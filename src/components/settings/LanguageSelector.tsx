import { Theme } from '@emotion/react'
import { Box, MenuItem, Skeleton, SxProps, TextField, Typography } from '@mui/material'
import { first } from 'lodash'
import ReactCountryFlag from 'react-country-flag'

import { useGetLanguagesQuery } from '../../hooks/queries/useGetLanguagesQuery'
import { useSettingsStore } from '../../stores/settingsStore'
import { humanizeLanguage } from '../../utils/humanizers'
import { mapLanguageToCountryCode } from '../../utils/mappers'

interface LanguageSelectorProps {
  sx?: SxProps<Theme>
}
export function LanguageSelector({ sx }: LanguageSelectorProps) {
  const { data, isLoading } = useGetLanguagesQuery()
  const { languageId, setLanguageId } = useSettingsStore()

  const hasLanguages = Boolean(data?.data.languages?.length)
  const defaultValue = first(data?.data.languages)?.value
  const value = languageId ?? defaultValue ?? ''

  return (
    <Box sx={sx}>
      {isLoading ? (
        <Skeleton variant='rectangular' height={40} />
      ) : (
        <TextField
          data-testid='language-select'
          fullWidth
          select
          label='Language'
          size='small'
          slotProps={{
            input: {
              sx: {
                borderRadius: 0,
              },
            },
          }}
          value={value}
          onChange={(event) => setLanguageId(Number(event.target.value))}
        >
          {data?.data.languages.map((language) => (
            <MenuItem key={language.value} value={language.value}>
              <Box display='flex' alignItems='center'>
                <ReactCountryFlag countryCode={mapLanguageToCountryCode(language)} svg />
                <Typography variant='body2' component='span' sx={{ ml: 1 }}>
                  {humanizeLanguage(language)}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          {!hasLanguages && (
            <MenuItem value={-1} disabled>
              No items
            </MenuItem>
          )}
        </TextField>
      )}
    </Box>
  )
}
