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
import { useContext } from 'react'
import { SettingsContext } from './SettingsContextProvider'
import { humanizeTheme } from '../../utils/humanizers'

interface ThemeSelectorProps {
  sx?: SxProps<Theme>
}
export function ThemeSelector({ sx }: ThemeSelectorProps) {
  const { data, isLoading } = useGetThemesQuery()
  const { settingsContext, setSettingsContext } = useContext(SettingsContext)

  const hasThemes = Boolean(data?.data.themes?.length)

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
          value={settingsContext.themeId ?? ''}
          onChange={(event) =>
            setSettingsContext((prev) => ({
              ...prev,
              themeId: Number(event.target.value),
            }))
          }
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
