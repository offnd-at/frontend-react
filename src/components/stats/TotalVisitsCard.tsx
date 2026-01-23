import { Visibility } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Skeleton, Typography } from '@mui/material'

interface TotalVisitsCardProps {
  loading: boolean
  visits?: number
}

export function TotalVisitsCard({ loading, visits }: TotalVisitsCardProps) {
  if (loading) {
    return <Skeleton variant='rectangular' height={160} sx={{ borderRadius: 2 }} />
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
      <CardHeader
        avatar={<Visibility color='primary' />}
        title={<Typography variant='h6'>Total visits</Typography>}
      />
      <CardContent>
        <Typography variant='h3' fontWeight='bold' color='primary.main'>
          {visits}
        </Typography>
      </CardContent>
    </Card>
  )
}
