import { render, screen } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { GeneratedLinks } from './GeneratedLinks'
import { ApiError } from '../../models/apiError'
import { GenerateLinkResponse } from '../../models/responses/generateLinkResponse'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('GeneratedLinks', () => {
  const queryClient = createTestQueryClient()

  const renderWithProviders = (ui: React.ReactElement) => {
    const wrapper = createWrapper(queryClient)
    return render(<SnackbarProvider>{ui}</SnackbarProvider>, { wrapper })
  }

  it('renders nothing when no response or errors', () => {
    const { container } = renderWithProviders(<GeneratedLinks />)
    expect(container.firstChild).toBeEmptyDOMElement()
  })

  it('renders links when response is provided', () => {
    const response: GenerateLinkResponse = {
      url: 'https://offnd.at/test',
      statsUrl: 'https://offnd.at/stats/test',
    }

    renderWithProviders(<GeneratedLinks response={response} />)

    expect(screen.getByTestId('generated-links-container')).toBeInTheDocument()
    expect(screen.getByText('Your URL')).toBeInTheDocument()
    expect(screen.getByText('https://offnd.at/test')).toBeInTheDocument()
    expect(screen.getByText('Stats for your URL')).toBeInTheDocument()
    expect(screen.getByText('https://offnd.at/stats/test')).toBeInTheDocument()
  })

  it('renders errors when errors are provided', () => {
    const errors: ApiError[] = [{ code: 'ERR', message: 'Something went wrong' }]

    renderWithProviders(<GeneratedLinks errors={errors} />)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.getByTestId('error-alert')).toBeInTheDocument()
  })
})
