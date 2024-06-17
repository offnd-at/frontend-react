import { Theme } from '@emotion/react'
import {
  Box,
  MenuItem,
  Skeleton,
  SxProps,
  TextField,
  Typography,
} from '@mui/material'
import ReactCountryFlag from 'react-country-flag'
import { useGetLanguagesQuery } from '../../hooks/queries/useGetLanguagesQuery'
import {
  mapLanguageToCountryCode,
  mapLanguageToLanguageName,
} from '../../utils/mappers'
import { SettingsContext } from './SettingsContextProvider'
import { useContext } from 'react'

interface LanguageSelectorProps {
  sx?: SxProps<Theme>
}
export function LanguageSelector({ sx }: LanguageSelectorProps) {
  const { data, isLoading } = useGetLanguagesQuery()
  const { settingsContext, setSettingsContext } = useContext(SettingsContext)

  const hasLanguages = Boolean(data?.data.languages?.length)

  return (
    <Box sx={sx}>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          height={41}
        />
      ) : (
        <TextField
          fullWidth
          select
          label='Language'
          size='small'
          InputProps={{
            sx: {
              borderRadius: 0,
            },
          }}
          value={settingsContext.languageId ?? ''}
          onChange={(event) =>
            setSettingsContext((prev) => ({
              ...prev,
              languageId: Number(event.target.value),
            }))
          }
        >
          {data?.data.languages.map((language) => (
            <MenuItem
              key={language.value}
              value={language.value}
            >
              <Box
                display='flex'
                alignItems='center'
              >
                <ReactCountryFlag
                  countryCode={mapLanguageToCountryCode(language)}
                  svg
                />
                <Typography
                  component='span'
                  sx={{ ml: 1 }}
                >
                  {mapLanguageToLanguageName(language)}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          {!hasLanguages && (
            <MenuItem
              value={-1}
              disabled
            >
              No items
            </MenuItem>
          )}
        </TextField>
      )}
    </Box>
  )
}
