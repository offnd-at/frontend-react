import { render, screen, waitFor } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { Route, Routes } from 'react-router-dom'
import { Stats } from './Stats'
import { createTestQueryClient, createWrapper } from '../test/utils'

describe('Stats page', () => {
  const queryClient = createTestQueryClient()

  it('renders stats for a phrase', async () => {
    const wrapper = createWrapper(queryClient, ['/s/test-phrase'])

    render(
      <SnackbarProvider>
        <Routes>
          <Route path='/s/:phrase' element={<Stats />} />
        </Routes>
      </SnackbarProvider>,
      { wrapper },
    )

    await waitFor(() => {
      expect(screen.getByText('/test-phrase')).toBeInTheDocument()
      expect(screen.getByText('Target URL')).toBeInTheDocument()
      expect(screen.getByText('https://example.com')).toBeInTheDocument()
      expect(screen.getByText('Total visits')).toBeInTheDocument()
      expect(screen.getByText('10')).toBeInTheDocument()
      expect(screen.getByText('Details')).toBeInTheDocument()
      expect(screen.getByText('Polish')).toBeInTheDocument()
      expect(screen.getByText('None')).toBeInTheDocument()
      expect(screen.getByText('Last visit')).toBeInTheDocument()
      expect(screen.getByText('Recent traffic')).toBeInTheDocument()
      expect(screen.getByText('No recent traffic recorded yet.')).toBeInTheDocument()
    })
  })

  it('updates document title with phrase', async () => {
    const wrapper = createWrapper(queryClient, ['/s/test-title'])

    render(
      <SnackbarProvider>
        <Routes>
          <Route path='/s/:phrase' element={<Stats />} />
        </Routes>
      </SnackbarProvider>,
      { wrapper },
    )

    await waitFor(() => {
      expect(document.title).toBe('offnd.at - /test-title')
    })
  })

  it('decodes phrase from URL', async () => {
    const wrapper = createWrapper(queryClient, ['/s/test%20phrase'])

    render(
      <SnackbarProvider>
        <Routes>
          <Route path='/s/:phrase' element={<Stats />} />
        </Routes>
      </SnackbarProvider>,
      { wrapper },
    )

    await waitFor(() => {
      expect(screen.getByText('/test phrase')).toBeInTheDocument()
    })
  })
})
