import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NotFound } from './NotFound'

describe('NotFound page', () => {
  it('renders correctly with the path', () => {
    render(
      <MemoryRouter initialEntries={['/some-bad-path']}>
        <NotFound />
      </MemoryRouter>,
    )

    expect(screen.getByText('The redirect was not found for /some-bad-path')).toBeInTheDocument()
  })
})
