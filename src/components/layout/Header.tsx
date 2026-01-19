import { Grid, SxProps, Theme } from '@mui/material'
import { Link } from 'react-router-dom'

import { HeaderLogo } from './HeaderLogo'
import { HeaderText } from './HeaderText'
import { SettingsSelectors } from '../settings/SettingsSelectors'

interface HeaderProps {
  isOnHomepage: boolean
  sx?: SxProps<Theme>
}

export function Header({ isOnHomepage, sx }: HeaderProps) {
  return (
    <Grid container sx={sx}>
      <Grid size={{ xs: isOnHomepage ? 8 : 12 }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <HeaderLogo />
          <HeaderText />
        </Link>
      </Grid>
      {isOnHomepage && (
        <Grid size={{ xs: 4 }}>
          <SettingsSelectors />
        </Grid>
      )}
    </Grid>
  )
}
