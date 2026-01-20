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
    recentVisits: [],
    createdAt: new Date(),
  }

  const renderWithProviders = (ui: React.ReactElement) => {
    const wrapper = createWrapper(queryClient)
    return render(ui, { wrapper })
  }

  it('renders skeletons when loading', () => {
    renderWithProviders(<LinkStats loading={true} />)

    expect(screen.getAllByTestId('loading-skeleton')).toHaveLength(2)
  })

  it('renders stats when data is provided', () => {
    renderWithProviders(<LinkStats loading={false} linkResponse={mockResponse} />)
    expect(screen.getByText('Target URL:')).toBeInTheDocument()
    expect(screen.getByText('https://example.com')).toBeInTheDocument()
    expect(screen.getByText('Visits:')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  it('renders errors when provided', () => {
    const errors = [{ code: 'ERR', message: 'Test error' }]
    render(<LinkStats loading={false} errors={errors} />)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })
})
