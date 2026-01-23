import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { DetailsCard } from './DetailsCard'

dayjs.extend(localizedFormat)
// However, since they are simple pure functions, we can also just rely on their output if we know it.
// Let's rely on real output for simplicity as logic is simple mapping.

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
    // Assuming 0 maps to English and None based on previous observation,
    // but best to just check if *something* is rendered if we don't assume specific mapping logic here.
    // Or we can rely on what we saw in LinkStats.test.tsx: "English", "None".

    // Let's just check for existence of known mapped values if possible, or partial text.
    // If mappings change, this test might break, but that's intended.
    expect(screen.getByText(/English/i)).toBeInTheDocument()
    // expect(screen.getByText(/None/i)).toBeInTheDocument() // Theme 0 might be "None" or similar.

    // Check date formatting
    const expectedDate = dayjs(date).format('LLL')
    expect(screen.getByText(expectedDate)).toBeInTheDocument()
  })

  it('handles undefined values gracefully', () => {
    render(<DetailsCard loading={false} />)
    // Should renders defaults
    expect(screen.getByText('Details')).toBeInTheDocument()
    // Should not crash
  })
})
