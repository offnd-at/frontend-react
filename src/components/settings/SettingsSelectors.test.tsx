import { render } from '@testing-library/react'
import { SettingsSelectors } from './SettingsSelectors'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('SettingsSelectors', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  it('renders correctly', () => {
    const { container } = render(<SettingsSelectors />, { wrapper })
    expect(container).toBeInTheDocument()
  })
})
