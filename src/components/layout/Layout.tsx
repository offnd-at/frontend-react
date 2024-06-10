import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Container
        sx={{
          py: 8,
        }}
      >
        <Header />
        <Box
          sx={{
            py: 4,
          }}
        />
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
