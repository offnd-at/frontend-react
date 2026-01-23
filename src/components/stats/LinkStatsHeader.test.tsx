import { render, screen } from '@testing-library/react'
import { LinkStatsHeader } from './LinkStatsHeader'

describe('LinkStatsHeader', () => {
  const defaultProps = {
    phrase: 'test-phrase',
  }

  it('renders phrase correctly', () => {
    render(<LinkStatsHeader {...defaultProps} />)
    expect(screen.getByText('/test-phrase')).toBeInTheDocument()
  })
})
