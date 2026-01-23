import { render, screen } from '@testing-library/react'
import { HeaderText } from './HeaderText'

describe('HeaderText', () => {
  it('renders main title', () => {
    render(<HeaderText />)

    expect(screen.getByTestId('header-text')).toBeInTheDocument()
  })
})
