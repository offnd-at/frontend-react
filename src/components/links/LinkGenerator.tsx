import { Stack, SxProps, Theme } from '@mui/material'
import { useState } from 'react'

import { GeneratedLinks } from './GeneratedLinks'
import { GenerateUrlTextField } from './GenerateUrlTextField'
import { LinkGeneratorHeader } from './LinkGeneratorHeader'
import { useGenerateLinkMutation } from '../../hooks/mutations/useGenerateLinkMutation'
import { useAppliedSettings } from '../../hooks/useAppliedSettings'

interface LinkGeneratorProps {
  sx?: SxProps<Theme>
}

export function LinkGenerator({ sx }: LinkGeneratorProps) {
  const [targetUrl, setTargetUrl] = useState<string>('')
  const settings = useAppliedSettings()

  const { data, error, isPending, mutate } = useGenerateLinkMutation({
    ...settings,
    targetUrl,
  })

  return (
    <Stack sx={sx} spacing={2}>
      <LinkGeneratorHeader />

      <GenerateUrlTextField
        url={targetUrl}
        setUrl={setTargetUrl}
        loading={isPending}
        onSubmit={mutate}
      />

      <GeneratedLinks
        sx={{
          mt: 2,
        }}
        errors={error?.response?.data.errors}
        response={data?.data}
      />
    </Stack>
  )
}
