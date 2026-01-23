import { render, screen } from '@testing-library/react'
import { TotalVisitsCard } from './TotalVisitsCard'

describe('TotalVisitsCard', () => {
  it('renders loading skeleton when loading', () => {
    const { container } = render(<TotalVisitsCard loading={true} />)
    const skeleton = container.querySelector('.MuiSkeleton-root')
    expect(skeleton).toBeInTheDocument()
  })

  it('renders total visits count', () => {
    render(<TotalVisitsCard loading={false} visits={1234} />)
    expect(screen.getByText('Total visits')).toBeInTheDocument()
    expect(screen.getByText('1234')).toBeInTheDocument()
  })

  it('renders 0 visits correctly', () => {
    render(<TotalVisitsCard loading={false} visits={0} />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
