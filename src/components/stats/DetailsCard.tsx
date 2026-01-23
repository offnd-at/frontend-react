import { CalendarToday, Language as LanguageIcon, Style } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Skeleton, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { Language } from '@/models/language'
import { Theme } from '@/models/theme'
import { humanizeLanguage, humanizeTheme } from '@/utils/humanizers'

interface DetailsCardProps {
  loading: boolean
  languageId?: number
  themeId?: number
  createdAt?: Date
}

export function DetailsCard({ loading, languageId, themeId, createdAt }: DetailsCardProps) {
  if (loading) {
    return <Skeleton variant='rectangular' height={160} sx={{ borderRadius: 2 }} />
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
      <CardHeader
        avatar={<Style color='primary' />}
        title={<Typography variant='h6'>Details</Typography>}
      />
      <CardContent>
        <Stack spacing={1}>
          <Stack direction='row' spacing={1} alignItems='center' title='Link language'>
            <LanguageIcon fontSize='small' />
            <Typography lineHeight={2} fontSize={14}>
              {humanizeLanguage({ value: languageId ?? -1 } as Language)}
            </Typography>
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center' title='Link theme'>
            <Style fontSize='small' />
            <Typography lineHeight={2} fontSize={14}>
              {humanizeTheme({ value: themeId ?? -1 } as Theme)}
            </Typography>
          </Stack>

          <Stack
            direction='row'
            spacing={1}
            alignItems='center'
            title={`Created at ${dayjs(createdAt).format()}`}
          >
            <CalendarToday fontSize='small' />
            <Typography lineHeight={2} fontSize={14}>
              {dayjs(createdAt).format('LLL')}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
