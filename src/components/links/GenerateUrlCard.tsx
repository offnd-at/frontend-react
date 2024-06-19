import { Box, SxProps, Theme, Typography } from '@mui/material'
import { UrlTextField } from './UrlTextField'
import { useContext, useState } from 'react'
import { useGenerateLinkMutation } from '../../hooks/mutations/useGenerateLinkMutation'
import { SettingsContext } from '../settings/SettingsContextProvider'
import { GeneratedLinks } from './GeneratedLinks'

interface GenerateUrlCardProps {
  sx?: SxProps<Theme>
}

export function GenerateUrlCard({ sx }: GenerateUrlCardProps) {
  const [targetUrl, setTargetUrl] = useState<string>('')
  const { settingsContext } = useContext(SettingsContext)

  const { data, error, isLoading, mutate } = useGenerateLinkMutation({
    ...settingsContext,
    targetUrl,
  })

  return (
    <Box sx={sx}>
      <Typography
        variant='h6'
        fontWeight='bold'
      >
        Generate a link
      </Typography>
      <UrlTextField
        url={targetUrl}
        setUrl={setTargetUrl}
        loading={isLoading}
        onSubmit={mutate}
      />
      <GeneratedLinks
        sx={{
          mt: 2,
        }}
        errors={error?.response?.data.errors}
        response={data?.data}
      />
    </Box>
  )
}
