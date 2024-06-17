import { Grid, SxProps, Theme } from '@mui/material'
import { HeaderText } from './HeaderText'
import { SettingsSelectors } from '../settings/SettingsSelectors'

interface HeaderProps {
  isOnHomepage: boolean
  sx?: SxProps<Theme>
}

export function Header({ isOnHomepage, sx }: HeaderProps) {
  return (
    <Grid
      container
      sx={sx}
    >
      <Grid
        item
        xs={isOnHomepage ? 8 : 12}
      >
        <HeaderText />
      </Grid>
      {isOnHomepage && (
        <Grid
          item
          xs={4}
        >
          <SettingsSelectors />
        </Grid>
      )}
    </Grid>
  )
}
