import { Stack, SxProps, Theme } from '@mui/material'
import { LanguageSelector } from './LanguageSelector'
import { FormatSelector } from './FormatSelector'
import { ThemeSelector } from './ThemeSelector'

interface SettingsSelectorsProps {
  sx?: SxProps<Theme>
}

export function SettingsSelectors({ sx }: SettingsSelectorsProps) {
  return (
    <Stack
      spacing={2}
      sx={sx}
    >
      <LanguageSelector />
      <FormatSelector />
      <ThemeSelector />
    </Stack>
  )
}
