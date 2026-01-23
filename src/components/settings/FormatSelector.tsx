import { Theme } from '@emotion/react'
import { Box, MenuItem, Skeleton, SxProps, TextField, Typography } from '@mui/material'
import { first } from 'lodash'

import { useGetFormatsQuery } from '../../hooks/queries/useGetFormatsQuery'
import { useSettingsStore } from '../../stores/settingsStore'
import { humanizeFormat } from '../../utils/humanizers'

interface FormatSelectorProps {
  sx?: SxProps<Theme>
}
export function FormatSelector({ sx }: FormatSelectorProps) {
  const { data, isLoading } = useGetFormatsQuery()
  const { formatId, setFormatId } = useSettingsStore()

  const hasFormats = Boolean(data?.data.formats?.length)
  const defaultValue = first(data?.data.formats)?.value
  const value = formatId ?? defaultValue ?? ''

  return (
    <Box sx={sx}>
      {isLoading ? (
        <Skeleton variant='rectangular' height={40} />
      ) : (
        <TextField
          data-testid='format-select'
          fullWidth
          select
          label='Format'
          size='small'
          slotProps={{
            input: {
              sx: {
                borderRadius: 0,
              },
            },
          }}
          value={value}
          onChange={(event) => setFormatId(Number(event.target.value))}
        >
          {data?.data.formats.map((format) => (
            <MenuItem key={format.value} value={format.value}>
              <Box display='flex' alignItems='center'>
                <Typography variant='body2' component='span' sx={{ ml: 1 }}>
                  {humanizeFormat(format)}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          {!hasFormats && (
            <MenuItem value={-1} disabled>
              No items
            </MenuItem>
          )}
        </TextField>
      )}
    </Box>
  )
}
