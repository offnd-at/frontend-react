import { Theme } from '@emotion/react'
import { Close } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { IconButton, InputAdornment, Stack, SxProps, TextField } from '@mui/material'

interface GenerateUrlTextFieldProps {
  url: string
  setUrl: (url: string) => void
  onSubmit?: () => void
  loading?: boolean
  sx?: SxProps<Theme>
}

export function GenerateUrlTextField({
  url,
  setUrl,
  loading,
  onSubmit,
  sx,
}: GenerateUrlTextFieldProps) {
  return (
    <Stack direction='row' sx={sx} spacing={0}>
      <TextField
        fullWidth
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        placeholder='https://offnd.at'
        slotProps={{
          input: {
            sx: {
              borderRadius: 0,
              '& input:-webkit-autofill': {
                WebkitBoxShadow: (theme) => `0 0 0 1000px ${theme.palette.background.paper} inset`,
                WebkitTextFillColor: (theme) => theme.palette.text.primary,
              },
            },
            endAdornment: url.length > 0 && (
              <InputAdornment position='end'>
                <IconButton
                  data-testid='clear-button'
                  disableRipple
                  onClick={() => setUrl('')}
                  edge='end'
                >
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <LoadingButton
        color='primary'
        size='large'
        sx={{
          borderRadius: 0,
          fontWeight: 'bold',
          boxShadow: 'none',
          border: '2px solid transparent',
          '&:hover': {
            boxShadow: 'none',
            bgcolor: 'transparent',
            color: 'primary.main',
            borderColor: 'primary.main',
          },
        }}
        disableElevation
        onClick={onSubmit}
        variant='contained'
        loading={loading}
      >
        Generate
      </LoadingButton>
    </Stack>
  )
}
