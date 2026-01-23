import { render, screen } from '@testing-library/react'
import { LinkGeneratorHeader } from './LinkGeneratorHeader'

describe('LinkGeneratorHeader', () => {
  it('renders header correctly', () => {
    render(<LinkGeneratorHeader />)
    expect(screen.getByText('Generate a link')).toBeInTheDocument()
  })
})
