import { render, screen } from '@testing-library/react'
import { HeaderLogo } from './HeaderLogo'

describe('HeaderLogo', () => {
  it('renders logo as an image', () => {
    render(<HeaderLogo />)

    expect(screen.getByTestId('header-logo')).toBeInTheDocument()
  })
})
