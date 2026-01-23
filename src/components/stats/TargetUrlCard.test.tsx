import { render, screen, fireEvent } from '@testing-library/react'
import { TargetUrlCard } from './TargetUrlCard'
import { MemoryRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

// Mock clipboard
const writeTextMock = vi.fn()
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: writeTextMock,
  },
  writable: true,
})

describe('TargetUrlCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderWithProps = (props: any) => {
    return render(
      <SnackbarProvider>
        <MemoryRouter>
          <TargetUrlCard {...props} />
        </MemoryRouter>
      </SnackbarProvider>,
    )
  }

  it('renders loading skeleton when loading', () => {
    const { container } = renderWithProps({ loading: true })
    const skeleton = container.querySelector('.MuiSkeleton-root')
    expect(skeleton).toBeInTheDocument()
  })

  it('renders target URL correctly', () => {
    const url = 'https://example.com/very/long/url/that/might/some/day/be/useful'
    renderWithProps({ loading: false, targetUrl: url })

    expect(screen.getByText('Target URL')).toBeInTheDocument()
    expect(screen.getByText(url)).toBeInTheDocument()

    // Check if link is correct
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', url)
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('copies to clipboard on button click', () => {
    const url = 'https://example.com'
    renderWithProps({ loading: false, targetUrl: url })

    const copyButton = screen.getByRole('button')
    fireEvent.click(copyButton)

    expect(writeTextMock).toHaveBeenCalledWith(url)
    expect(screen.getByText('Copied to clipboard')).toBeInTheDocument()
  })

  it('does not copy if url is missing', () => {
    renderWithProps({ loading: false, targetUrl: undefined })

    const copyButton = screen.getByRole('button')
    fireEvent.click(copyButton)

    expect(writeTextMock).not.toHaveBeenCalled()
  })
})
