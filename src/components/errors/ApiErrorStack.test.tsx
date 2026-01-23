import { render, screen } from '@testing-library/react'
import { ApiErrorStack } from './ApiErrorStack'
import { unexpectedError } from '../../models/apiError'
import type { ApiError } from '../../models/apiError'

describe('ApiErrorStack', () => {
  it('renders unexpected error when errors prop is not provided', () => {
    render(<ApiErrorStack />)

    expect(screen.getByText(unexpectedError.message)).toBeInTheDocument()
  })

  it('renders one element for each error', () => {
    const errors: ApiError[] = [
      { code: 'ERR_1', message: 'First error' },
      { code: 'ERR_2', message: 'Second error' },
    ]

    render(<ApiErrorStack errors={errors} />)

    expect(screen.getByText('First error')).toBeInTheDocument()
    expect(screen.getByText('Second error')).toBeInTheDocument()
  })

  it('renders correct number of alerts', () => {
    const errors: ApiError[] = [
      { code: 'ERR_1', message: 'First error' },
      { code: 'ERR_2', message: 'Second error' },
      { code: 'ERR_3', message: 'Third error' },
    ]

    render(<ApiErrorStack errors={errors} />)

    const alerts = screen.getAllByTestId('error-alert')
    expect(alerts).toHaveLength(3)
  })
})
