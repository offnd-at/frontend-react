import { Box, SxProps, Theme, Typography } from '@mui/material'
import { useState } from 'react'

import { GeneratedLinks } from './GeneratedLinks'
import { UrlTextField } from './UrlTextField'
import { useGenerateLinkMutation } from '../../hooks/mutations/useGenerateLinkMutation'
import { useAppliedSettings } from '../../hooks/useAppliedSettings'

interface GenerateUrlCardProps {
  sx?: SxProps<Theme>
}

export function GenerateUrlCard({ sx }: GenerateUrlCardProps) {
  const [targetUrl, setTargetUrl] = useState<string>('')
  const settings = useAppliedSettings()

  const { data, error, isPending, mutate } = useGenerateLinkMutation({
    ...settings,
    targetUrl,
  })

  return (
    <Box sx={sx}>
      <Typography variant='h6' fontWeight='bold'>
        Generate a link
      </Typography>
      <UrlTextField url={targetUrl} setUrl={setTargetUrl} loading={isPending} onSubmit={mutate} />
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
