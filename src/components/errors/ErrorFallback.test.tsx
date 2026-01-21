import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorFallback } from './ErrorFallback'
import { vi } from 'vitest'

describe('ErrorFallback', () => {
  const mockError = new Error('Test error')
  mockError.stack = 'Test stack trace'
  const mockReset = vi.fn()

  it('renders correctly with error message', () => {
    render(<ErrorFallback error={mockError} resetErrorBoundary={mockReset} />)

    expect(screen.getByText('System Malfunction')).toBeInTheDocument()
    expect(screen.getByText(/We encountered an unexpected error/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /refresh/i })).toBeInTheDocument()
  })

  it('calls resetErrorBoundary when try again is clicked', () => {
    render(<ErrorFallback error={mockError} resetErrorBoundary={mockReset} />)

    fireEvent.click(screen.getByRole('button', { name: /refresh/i }))
    expect(mockReset).toHaveBeenCalled()
  })

  it('shows error details in development mode', () => {
    // Mock import.meta.env.MODE to 'development'
    vi.stubEnv('MODE', 'development')

    render(<ErrorFallback error={mockError} resetErrorBoundary={mockReset} />)

    const detailsToggle = screen.getByText('Show Diagnostics')
    fireEvent.click(detailsToggle)

    expect(screen.getByText('Error: Test error')).toBeInTheDocument()
    expect(screen.getByText('Test stack trace')).toBeInTheDocument()

    vi.unstubAllEnvs()
  })

  it('hides error details in production', () => {
    vi.stubEnv('MODE', 'production')

    render(<ErrorFallback error={mockError} resetErrorBoundary={mockReset} />)

    expect(screen.queryByText('Show Diagnostics')).not.toBeInTheDocument()

    vi.unstubAllEnvs()
  })
})
