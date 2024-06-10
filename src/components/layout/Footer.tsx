import { Container, Paper, Typography } from '@mui/material'

function Footer() {
  return (
    <Paper
      sx={{
        width: '100%',
        mt: 'auto',
        borderRadius: 0,
        p: 2,
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          component='div'
          flexGrow={1}
          variant='caption'
          textAlign='right'
        >
          offnd.at - share the offensiveness
        </Typography>
      </Container>
    </Paper>
  )
}

export default Footer
