import { Container, Paper, SxProps, Theme, Typography } from '@mui/material'

interface FooterProps {
  sx?: SxProps<Theme>
}

export function Footer({ sx }: FooterProps) {
  return (
    <Paper
      sx={{
        width: '100%',
        mt: 'auto',
        borderRadius: 0,
        p: 2,
        ...sx,
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          data-testid='footer-text'
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
