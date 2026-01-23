import { render, screen } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('Layout', () => {
  const queryClient = createTestQueryClient()

  it('renders correctly', () => {
    const wrapper = createWrapper(queryClient)

    render(
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<div>Test Content</div>} />
        </Route>
      </Routes>,
      { wrapper },
    )

    expect(screen.getByText('offnd.at')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
