import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../components/errors/ErrorFallback'

const BuggyComponent = () => {
  throw new Error('I crashed!')
}

describe('ErrorBoundary Integration', () => {
  it('catches error from child component and renders fallback', () => {
    // Suppress console.error for this test as we expect a crash
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
      </ErrorBoundary>,
    )

    expect(screen.getByText('System Malfunction')).toBeInTheDocument()

    consoleSpy.mockRestore()
  })
})
