import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { DetailsCard } from './DetailsCard'

dayjs.extend(localizedFormat)

describe('DetailsCard', () => {
  it('renders loading skeleton when loading', () => {
    const { container } = render(<DetailsCard loading={true} />)
    const skeleton = container.querySelector('.MuiSkeleton-root')
    expect(skeleton).toBeInTheDocument()
  })

  it('renders details correctly', () => {
    const date = new Date('2023-01-01T12:00:00')
    render(<DetailsCard loading={false} languageId={0} themeId={0} createdAt={date} />)

    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText(/English/i)).toBeInTheDocument()
    expect(screen.getByText(/None/i)).toBeInTheDocument()

    const expectedDate = dayjs(date).format('LLL')
    expect(screen.getByText(expectedDate)).toBeInTheDocument()
  })

  it('handles undefined values gracefully', () => {
    render(<DetailsCard loading={false} />)
    expect(screen.getByText('Details')).toBeInTheDocument()
  })
})
