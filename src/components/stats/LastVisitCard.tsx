import { History } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Skeleton, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { LinkVisit } from '@/models/linkVisit'

interface LastVisitCardProps {
  loading: boolean
  lastVisit?: LinkVisit
}

export function LastVisitCard({ loading, lastVisit }: LastVisitCardProps) {
  if (loading) {
    return <Skeleton variant='rectangular' height={160} sx={{ borderRadius: 2 }} />
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
      <CardHeader
        avatar={<History color='primary' />}
        title={<Typography variant='h6'>Last visit</Typography>}
      />
      <CardContent>
        <Typography variant='h5' component='div'>
          {lastVisit?.visitedAt ? dayjs(lastVisit.visitedAt).fromNow() : 'Never visited'}
        </Typography>
        {lastVisit?.visitedAt && (
          <Typography variant='subtitle2' color='text.secondary'>
            on {dayjs(lastVisit.visitedAt).format('lll')}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
