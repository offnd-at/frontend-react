import { QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'
import { createTestQueryClient } from '../../test/utils'

describe('Header', () => {
  const queryClient = createTestQueryClient()

  const renderHeader = (isOnHomepage: boolean) => {
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Header isOnHomepage={isOnHomepage} />
        </MemoryRouter>
      </QueryClientProvider>,
    )
  }

  it('renders logo and text on any page', () => {
    renderHeader(false)
    expect(screen.getByTestId('header-logo')).toBeInTheDocument()
    expect(screen.getByTestId('header-text')).toBeInTheDocument()
  })

  it('renders settings selectors only on homepage', () => {
    const { rerender } = renderHeader(true)
    expect(screen.getByTestId('header-settings')).toBeInTheDocument()

    rerender(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Header isOnHomepage={false} />
        </MemoryRouter>
      </QueryClientProvider>,
    )
    expect(screen.queryByTestId('header-settings')).not.toBeInTheDocument()
  })

  it('contains a link to the homepage', () => {
    renderHeader(false)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
