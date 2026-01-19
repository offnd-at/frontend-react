import { Container, Grid } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <Grid container alignItems='center' justifyContent='center' spacing={0}>
        <Grid size={{ xs: 12, md: 10, xl: 6 }}>
          <Container
            sx={{
              py: 2,
            }}
          >
            <Header
              isOnHomepage={pathname === '/'}
              sx={{
                pt: 4,
                pb: 12,
              }}
            />
            <Outlet />
          </Container>
        </Grid>
      </Grid>

      <Footer />
    </>
  )
}
