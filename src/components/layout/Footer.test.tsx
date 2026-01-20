import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer and slogan', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer-text')).toBeInTheDocument()
  })
})
