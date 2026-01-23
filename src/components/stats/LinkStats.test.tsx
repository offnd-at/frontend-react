import { render, screen, waitFor } from '@testing-library/react'
import { LinkStats } from './LinkStats'
import { createTestQueryClient, createWrapper } from '../../test/utils'
import { server } from '../../test/server'
import { http, HttpResponse } from 'msw'

const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000/api'

describe('LinkStats', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    const queryClient = createTestQueryClient()
    const wrapper = createWrapper(queryClient)
    return render(ui, { wrapper })
  }

  it('renders loading state initially', () => {
    // We can delay the response to ensure we see loading state
    server.use(
      http.get(`${API_URL}/links/test-phrase`, async () => {
        await new Promise((resolve) => setTimeout(resolve, 100))
        return HttpResponse.json({})
      }),
    )

    const { container } = renderWithProviders(<LinkStats phrase='test-phrase' />)
    const skeletons = container.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('renders data when fetched successfully', async () => {
    const mockData = {
      id: '1',
      phrase: 'test-phrase',
      targetUrl: 'https://example.com',
      visits: 123,
      recentVisits: [
        {
          visitedAt: new Date('2023-01-01T12:00:00').toISOString(),
          ipAddress: '127.0.0.1',
          referrer: 'Direct',
        },
      ],
      createdAt: new Date('2023-01-01T10:00:00').toISOString(),
      languageId: 0,
      themeId: 0,
    }

    server.use(
      http.get(`${API_URL}/links/test-phrase`, () => {
        return HttpResponse.json(mockData)
      }),
    )

    renderWithProviders(<LinkStats phrase='test-phrase' />)

    expect(await screen.findByText('123')).toBeInTheDocument()
    expect(screen.getByText('https://example.com')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
  })

  it('renders error state when fetch fails', async () => {
    server.use(
      http.get(`${API_URL}/links/error-phrase`, () => {
        return HttpResponse.json(
          { errors: [{ code: 'SomeError', message: 'Failed to fetch stats' }] },
          { status: 400 },
        )
      }),
    )

    renderWithProviders(<LinkStats phrase='error-phrase' />)

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch stats')).toBeInTheDocument()
    })
  })
})
