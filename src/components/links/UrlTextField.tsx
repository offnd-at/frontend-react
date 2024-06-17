import { Theme } from '@emotion/react'
import { Close } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
} from '@mui/material'

interface UrlTextFieldProps {
  url: string
  setUrl: (url: string) => void
  onSubmit?: () => void
  loading?: boolean
  sx?: SxProps<Theme>
}

export function UrlTextField({
  url,
  setUrl,
  loading,
  onSubmit,
  sx,
}: UrlTextFieldProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        ...sx,
      }}
    >
      <TextField
        label='URL'
        fullWidth
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        placeholder='https://offnd.at'
        InputProps={{
          sx: {
            borderRadius: 0,
          },
          endAdornment: url.length > 0 && (
            <InputAdornment position='end'>
              <IconButton
                disableRipple
                onClick={() => setUrl('')}
                edge='end'
              >
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <LoadingButton
        onClick={onSubmit}
        variant='contained'
        loading={loading}
        sx={{
          borderRadius: 0,
        }}
      >
        Generate
      </LoadingButton>
    </Box>
  )
}
