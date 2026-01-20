import { render, screen } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { LinkStatsHeader } from './LinkStatsHeader'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('LinkStatsHeader', () => {
  const queryClient = createTestQueryClient()
  const defaultProps = {
    phrase: 'test-phrase',
    url: 'https://offnd.at/test-phrase',
  }

  const renderWithProviders = (props = defaultProps) => {
    const wrapper = createWrapper(queryClient)
    return render(
      <SnackbarProvider>
        <LinkStatsHeader {...props} />
      </SnackbarProvider>,
      { wrapper },
    )
  }

  it('renders phrase correctly', () => {
    renderWithProviders()
    expect(screen.getByText('/test-phrase')).toBeInTheDocument()
  })
})
