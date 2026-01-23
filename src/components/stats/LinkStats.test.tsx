import { render, screen } from '@testing-library/react'
import { GetLinkResponse } from '@/models/responses/getLinkResponse'
import { LinkStats } from './LinkStats'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('LinkStats', () => {
  const queryClient = createTestQueryClient()
  const mockResponse: GetLinkResponse = {
    id: '1',
    targetUrl: 'https://example.com',
    visits: 123,
    phrase: 'test',
    recentVisits: [
      {
        visitedAt: new Date(),
        ipAddress: '127.0.0.1',
        referrer: 'Direct',
      },
    ],
    createdAt: new Date(),
    languageId: 0,
    themeId: 0,
  }

  const renderWithProviders = (ui: React.ReactElement) => {
    const wrapper = createWrapper(queryClient)
    return render(ui, { wrapper })
  }

  it('renders skeletons when loading', () => {
    renderWithProviders(<LinkStats loading={true} />)
    // We expect 4 skeletons now: 3 for stats cards + 1 for target URL
    // Actually MUI Skeleton might be present multiple times or we used specific structure.
    // Let's check if we can find them by class or just by count if generic.
    // In the code we use <Skeleton variant='rectangular' /> 4 times.
    // We didn't add data-testid='loading-skeleton' to the new Skeletons in the big refactor.
    // I need to add data-testid back or rely on class.
    // The previous test relied on data-testid='loading-skeleton'.
    // Use container query or just 'progressbar' role? Skeleton usually doesn't have a role by default unless configured.
    // I will check for 4 skeletons by class or just blindly trust it renders something?
    // Better: Add data-testid back in the component or use querySelector.
    // The component code I wrote in previous step:
    // <Skeleton variant='rectangular' ... />
    // It does NOT have data-testid='loading-skeleton'.
    // Use render().container.querySelectorAll('.MuiSkeleton-root').
    const { container } = renderWithProviders(<LinkStats loading={true} />)
    expect(container.getElementsByClassName('MuiSkeleton-root').length).toBeGreaterThanOrEqual(4)
  })

  it('renders stats when data is provided', () => {
    renderWithProviders(<LinkStats loading={false} linkResponse={mockResponse} />)

    // Check Headers
    expect(screen.getByText('Total Visits')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByText('Last Visit')).toBeInTheDocument()
    expect(screen.getByText('Target URL')).toBeInTheDocument()

    // Check Data
    expect(screen.getByText('123')).toBeInTheDocument() // Visits
    expect(screen.getByText('https://example.com')).toBeInTheDocument() // Target URL

    // Check Chips (Language/Theme) - assuming 0 maps to something or "Unknown" / "None"
    // languageId 0 -> English (from humanizers)
    // themeId 0 -> None (from humanizers)
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('None')).toBeInTheDocument()

    // Check Recent Traffic
    expect(screen.getByText('Recent Traffic')).toBeInTheDocument()
    // It should show IP and Referrer
    expect(screen.getByText('127.0.0.1')).toBeInTheDocument()
    expect(screen.getByText('Ref: Direct')).toBeInTheDocument()
  })

  it('renders "No recent traffic" message when list is empty', () => {
    const emptyTrafficResponse = { ...mockResponse, recentVisits: [] }
    renderWithProviders(<LinkStats loading={false} linkResponse={emptyTrafficResponse} />)

    expect(screen.getByText('Recent Traffic')).toBeInTheDocument()
    expect(screen.getByText('No recent traffic recorded yet.')).toBeInTheDocument()
  })

  it('renders errors when provided', () => {
    const errors = [{ code: 'ERR', message: 'Test error' }]
    render(<LinkStats loading={false} errors={errors} />)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })
})
