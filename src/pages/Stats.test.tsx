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
      expect(screen.getByText('Target URL:')).toBeInTheDocument()
      expect(screen.getByText('https://example.com')).toBeInTheDocument()
      expect(screen.getByText('Visits:')).toBeInTheDocument()
      expect(screen.getByText('10')).toBeInTheDocument()
    })
  })
})
