import { Theme } from '@emotion/react'
import {
  Box,
  MenuItem,
  Skeleton,
  SxProps,
  TextField,
  Typography,
} from '@mui/material'
import { useGetFormatsQuery } from '../../hooks/queries/useGetFormatsQuery'
import { useContext } from 'react'
import { SettingsContext } from './SettingsContextProvider'
import { humanizeFormat } from '../../utils/humanizers'

interface FormatSelectorProps {
  sx?: SxProps<Theme>
}
export function FormatSelector({ sx }: FormatSelectorProps) {
  const { data, isLoading } = useGetFormatsQuery()
  const { settingsContext, setSettingsContext } = useContext(SettingsContext)

  const hasFormats = Boolean(data?.data.formats?.length)

  return (
    <Box sx={sx}>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          height={41}
        />
      ) : (
        <TextField
          fullWidth
          select
          label='Format'
          size='small'
          InputProps={{
            sx: {
              borderRadius: 0,
            },
          }}
          value={settingsContext.formatId ?? ''}
          onChange={(event) =>
            setSettingsContext((prev) => ({
              ...prev,
              formatId: Number(event.target.value),
            }))
          }
        >
          {data?.data.formats.map((format) => (
            <MenuItem
              key={format.value}
              value={format.value}
            >
              <Box
                display='flex'
                alignItems='center'
              >
                <Typography
                  component='span'
                  sx={{ ml: 1 }}
                >
                  {humanizeFormat(format)}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          {!hasFormats && (
            <MenuItem
              value={-1}
              disabled
            >
              No items
            </MenuItem>
          )}
        </TextField>
      )}
    </Box>
  )
}
