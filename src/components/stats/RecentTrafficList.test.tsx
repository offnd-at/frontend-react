import { render, screen } from '@testing-library/react'
import { RecentTrafficList } from './RecentTrafficList'

describe('RecentTrafficList', () => {
  it('renders loading skeleton when loading', () => {
    const { container } = render(<RecentTrafficList loading={true} recentVisits={[]} />)
    const skeleton = container.querySelector('.MuiSkeleton-root')
    expect(skeleton).toBeInTheDocument()
  })

  it('renders empty state message', () => {
    render(<RecentTrafficList loading={false} recentVisits={[]} />)
    expect(screen.getByText('Recent traffic')).toBeInTheDocument()
    expect(screen.getByText('No recent traffic recorded yet.')).toBeInTheDocument()
  })

  it('renders list of visits correctly', () => {
    const visits = [
      {
        visitedAt: new Date('2023-01-01T10:00:00'),
        ipAddress: '192.168.1.1',
        referrer: 'Google',
      },
      {
        visitedAt: new Date('2023-01-01T11:00:00'),
        ipAddress: '10.0.0.1',
        referrer: 'Direct',
      },
    ]

    render(<RecentTrafficList loading={false} recentVisits={visits} />)

    expect(screen.getByText('Recent traffic')).toBeInTheDocument()

    expect(screen.getByText('192.168.1.1')).toBeInTheDocument()
    expect(screen.getByText('Referrer: Google')).toBeInTheDocument()

    expect(screen.getByText('10.0.0.1')).toBeInTheDocument()
    expect(screen.getByText('Referrer: Direct')).toBeInTheDocument()
  })
})
