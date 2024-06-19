import { Grid, SxProps, Theme } from '@mui/material'
import { HeaderText } from './HeaderText'
import { SettingsSelectors } from '../settings/SettingsSelectors'
import { Link } from 'react-router-dom'
import { HeaderLogo } from './HeaderLogo'

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
        <Link to='/'>
          <HeaderLogo />
          <HeaderText />
        </Link>
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
