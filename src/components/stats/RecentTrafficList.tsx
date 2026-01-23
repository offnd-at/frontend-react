import { Box, List, ListItem, ListItemText, Paper, Skeleton, Typography } from '@mui/material'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LinkVisit } from '@/models/linkVisit'

dayjs.extend(relativeTime)

interface RecentTrafficListProps {
  loading: boolean
  recentVisits: LinkVisit[]
}

export function RecentTrafficList({ loading, recentVisits }: RecentTrafficListProps) {
  if (loading) {
    return <Skeleton variant='rectangular' height={240} sx={{ borderRadius: 2 }} />
  }

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Recent traffic
      </Typography>

      <Paper variant='outlined' sx={{ borderRadius: 0 }}>
        {recentVisits.length > 0 ? (
          <List disablePadding>
            {recentVisits.map((visit, index) => (
              <ListItem key={index} divider={index !== recentVisits.length - 1}>
                <ListItemText
                  primary={dayjs(visit.visitedAt).fromNow()}
                  secondary={
                    <Box
                      component='span'
                      sx={{
                        display: 'block',
                        wordBreak: 'break-all',
                        overflowWrap: 'anywhere',
                        '& > span:not(:first-of-type)': {
                          paddingLeft: 1,
                        },
                      }}
                    >
                      <span>{dayjs(visit.visitedAt).format('LLLL')}</span>
                      {visit.ipAddress && (
                        <>
                          <span>•</span>
                          <span>{visit.ipAddress}</span>
                        </>
                      )}
                      {visit.referrer && (
                        <>
                          <span>•</span>
                          <span>Referrer: {visit.referrer}</span>
                        </>
                      )}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Box p={2} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='body2' color='text.secondary'>
              No recent traffic recorded yet.
            </Typography>
          </Box>
        )}
      </Paper>
    </>
  )
}
