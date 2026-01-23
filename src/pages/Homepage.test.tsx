import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { Homepage } from './Homepage'
import { createTestQueryClient, createWrapper } from '../test/utils'

describe('Homepage', () => {
  const queryClient = createTestQueryClient()
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <SnackbarProvider>{createWrapper(queryClient)({ children })}</SnackbarProvider>
  )

  it('renders and allows link generation', async () => {
    render(<Homepage />, { wrapper })

    expect(screen.getByText('Generate a link')).toBeInTheDocument()

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'https://google.com' } })

    const button = screen.getByRole('button', { name: /generate/i })
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('Your URL')).toBeInTheDocument()
      expect(screen.getByText('http://offnd.at/test-phrase')).toBeInTheDocument()
    })
  })
})
