import { Theme } from '@emotion/react'
import {
  Box,
  MenuItem,
  Skeleton,
  SxProps,
  TextField,
  Typography,
} from '@mui/material'
import { useGetThemesQuery } from '../../hooks/queries/useGetThemesQuery'
import { useSettingsStore } from '../../stores/settingsStore'
import { humanizeTheme } from '../../utils/humanizers'
import { first } from 'lodash'

interface ThemeSelectorProps {
  sx?: SxProps<Theme>
}
export function ThemeSelector({ sx }: ThemeSelectorProps) {
  const { data, isLoading } = useGetThemesQuery()
  const { themeId, setThemeId } = useSettingsStore()

  const hasThemes = Boolean(data?.data.themes?.length)
  const defaultValue = first(data?.data.themes)?.value
  const value = themeId ?? defaultValue ?? ''

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
          label='Theme'
          size='small'
          InputProps={{
            sx: {
              borderRadius: 0,
            },
          }}
          value={value}
          onChange={(event) => setThemeId(Number(event.target.value))}
        >
          {data?.data.themes.map((theme) => (
            <MenuItem
              key={theme.value}
              value={theme.value}
            >
              <Box
                display='flex'
                alignItems='center'
              >
                <Typography
                  component='span'
                  sx={{ ml: 1 }}
                >
                  {humanizeTheme(theme)}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          {!hasThemes && (
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
