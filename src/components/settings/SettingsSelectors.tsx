import { Stack, SxProps, Theme } from '@mui/material'

import { FormatSelector } from './FormatSelector'
import { LanguageSelector } from './LanguageSelector'
import { ThemeSelector } from './ThemeSelector'

interface SettingsSelectorsProps {
  sx?: SxProps<Theme>
}

export function SettingsSelectors({ sx }: SettingsSelectorsProps) {
  return (
    <Stack spacing={2} sx={sx} role='group' aria-label='Link settings'>
      <LanguageSelector />
      <FormatSelector />
      <ThemeSelector />
    </Stack>
  )
}
