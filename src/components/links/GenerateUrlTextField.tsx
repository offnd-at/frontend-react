import { Theme } from '@emotion/react'
import { Close } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { IconButton, InputAdornment, Stack, SxProps, TextField, Tooltip } from '@mui/material'
import { useEffect, useRef } from 'react'

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
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <Stack direction='row' sx={sx} spacing={0}>
      <Tooltip title='Press Ctrl + / to focus' placement='top-end' arrow enterDelay={750}>
        <TextField
          fullWidth
          inputRef={inputRef}
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder='https://offnd.at'
          aria-label='URL to shorten'
          slotProps={{
            input: {
              sx: {
                borderRadius: 0,
              },
              endAdornment: url.length > 0 && (
                <InputAdornment position='end'>
                  <IconButton
                    data-testid='clear-button'
                    aria-label='Clear url'
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
      </Tooltip>

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
