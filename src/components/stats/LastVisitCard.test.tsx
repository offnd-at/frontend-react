import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LastVisitCard } from './LastVisitCard'

dayjs.extend(relativeTime)

describe('LastVisitCard', () => {
  it('renders loading skeleton when loading', () => {
    const { container } = render(<LastVisitCard loading={true} />)
    const skeleton = container.querySelector('.MuiSkeleton-root')
    expect(skeleton).toBeInTheDocument()
  })

  it('renders "Never visited" when no last visit provided', () => {
    render(<LastVisitCard loading={false} />)
    expect(screen.getByText('Last visit')).toBeInTheDocument()
    expect(screen.getByText('Never visited')).toBeInTheDocument()
  })

  it('renders relative time and formatted date when visited', () => {
    const now = dayjs()
    const visitedAt = now.subtract(5, 'minute').toDate()

    // Mock the date displayed to be consistent or just use basic matcher?
    // "5 minutes ago"

    render(
      <LastVisitCard
        loading={false}
        lastVisit={{ visitedAt, ipAddress: '1.1.1.1', referrer: 'Direct' }}
      />,
    )

    expect(screen.getByText(/5 minutes ago/i)).toBeInTheDocument() // Approximate
    expect(screen.getByText(new RegExp(dayjs(visitedAt).format('lll'), 'i'))).toBeInTheDocument()
  })
})
