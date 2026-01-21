import { Theme } from '@emotion/react'
import { Close } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, IconButton, InputAdornment, SxProps, TextField } from '@mui/material'

interface UrlTextFieldProps {
  url: string
  setUrl: (url: string) => void
  onSubmit?: () => void
  loading?: boolean
  sx?: SxProps<Theme>
}

export function UrlTextField({ url, setUrl, loading, onSubmit, sx }: UrlTextFieldProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        ...sx,
      }}
    >
      <TextField
        fullWidth
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        placeholder='https://offnd.at'
        slotProps={{
          input: {
            sx: {
              borderRadius: 0,
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
    </Box>
  )
}
