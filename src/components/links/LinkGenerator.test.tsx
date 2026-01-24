import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LinkGenerator } from './LinkGenerator'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('LinkGenerator', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('renders correctly', () => {
    render(<LinkGenerator />, { wrapper })
    expect(screen.getByText('Generate a link')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument()
  })

  it('allows generating a link', async () => {
    render(<LinkGenerator />, { wrapper })

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /generate/i })

    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByTestId('generated-links-container')).toBeInTheDocument()
    })

    expect(screen.getByText('http://offnd.at/test-phrase')).toBeInTheDocument()
    expect(screen.getByText('http://offnd.at/stats/test-phrase')).toBeInTheDocument()
  })
})
