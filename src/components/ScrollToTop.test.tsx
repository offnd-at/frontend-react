import { render, act, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'

function NavigationTrigger() {
  const navigate = useNavigate()
  return <button onClick={() => navigate('/other')}>Go to other</button>
}

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls scrollTo on initial render', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop />
      </MemoryRouter>,
    )

    expect(document.documentElement.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  })

  it('calls scrollTo when pathname changes', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<NavigationTrigger />} />
          <Route path='/other' element={<div>Other Page</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(document.documentElement.scrollTo).toHaveBeenCalledTimes(1)

    const button = screen.getByText('Go to other')
    act(() => {
      button.click()
    })

    expect(document.documentElement.scrollTo).toHaveBeenCalledTimes(2)
  })
})
