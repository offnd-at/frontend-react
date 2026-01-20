import { render, screen, fireEvent } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { LinkDisplay } from './LinkDisplay'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('LinkDisplay', () => {
  const queryClient = createTestQueryClient()
  const defaultProps = {
    title: 'Test Link',
    url: 'https://offnd.at/test',
  }

  const renderWithProviders = (props = defaultProps) => {
    const wrapper = createWrapper(queryClient)
    return render(
      <SnackbarProvider>
        <LinkDisplay {...props} />
      </SnackbarProvider>,
      { wrapper },
    )
  }

  it('renders title and url correctly', () => {
    renderWithProviders()
    expect(screen.getByText('Test Link')).toBeInTheDocument()
    expect(screen.getByText('https://offnd.at/test')).toBeInTheDocument()
  })

  it('has a link pointing to the url', () => {
    renderWithProviders()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://offnd.at/test')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('copies url to clipboard when copy button is clicked', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined)
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    })

    renderWithProviders()
    const copyButton = screen.getByTestId('copy-button')
    fireEvent.click(copyButton)

    expect(writeTextMock).toHaveBeenCalledWith('https://offnd.at/test')
    expect(await screen.findByText('Copied to clipboard')).toBeInTheDocument()
  })
})
