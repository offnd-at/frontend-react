import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ErrorCallStack } from './ErrorCallStack'

describe('ErrorCallStack', () => {
  const mockError = new Error('Test error')
  mockError.stack = 'Test stack trace'

  it('toggles diagnostics visibility', async () => {
    render(<ErrorCallStack error={mockError} />)

    // Initially hidden
    const stackTrace = screen.getByText('Test stack trace')
    expect(stackTrace).not.toBeVisible()
    expect(screen.getByText('Show Diagnostics')).toBeInTheDocument()

    // Show
    fireEvent.click(screen.getByText('Show Diagnostics'))
    expect(stackTrace).toBeVisible()
    expect(screen.getByText('Hide Diagnostics')).toBeInTheDocument()
    expect(screen.getByText('Error: Test error')).toBeInTheDocument()

    // Hide
    fireEvent.click(screen.getByText('Hide Diagnostics'))
    await waitFor(() => expect(stackTrace).not.toBeVisible())
    expect(screen.getByText('Show Diagnostics')).toBeInTheDocument()
  })

  it('handles string as error', () => {
    render(<ErrorCallStack error='String error message' />)

    fireEvent.click(screen.getByText('Show Diagnostics'))

    expect(screen.getByText('Error: String error message')).toBeInTheDocument()
  })

  it('handles object as error', () => {
    const objError = { message: 'Object error', code: 500 }
    render(<ErrorCallStack error={objError} />)

    fireEvent.click(screen.getByText('Show Diagnostics'))

    expect(screen.getByText('Error: [object Object]')).toBeInTheDocument()
  })

  it('handles Error without stack', () => {
    const errorNoStack = new Error('No stack')
    delete errorNoStack.stack

    render(<ErrorCallStack error={errorNoStack} />)

    fireEvent.click(screen.getByText('Show Diagnostics'))

    expect(screen.getByText('Error: No stack')).toBeInTheDocument()
  })
})
