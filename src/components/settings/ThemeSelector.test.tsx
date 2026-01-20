import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { act } from 'react'
import { ThemeSelector } from './ThemeSelector'
import { useSettingsStore } from '../../stores/settingsStore'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('ThemeSelector', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  beforeEach(() => {
    queryClient.clear()
    act(() => {
      useSettingsStore.setState({ themeId: undefined })
    })
  })

  it('renders correctly and shows options', async () => {
    render(<ThemeSelector />, { wrapper })

    await waitFor(() => {
      expect(screen.getByTestId('theme-select')).toBeInTheDocument()
    })

    const select = within(screen.getByTestId('theme-select')).getByRole('combobox')
    fireEvent.mouseDown(select)

    const listbox = await screen.findByRole('listbox')
    expect(listbox).toBeInTheDocument()
    expect(within(listbox).getByText('None')).toBeInTheDocument()
    expect(within(listbox).getByText('Proper names')).toBeInTheDocument()
    expect(within(listbox).getByText('Politicians')).toBeInTheDocument()
  })

  it('updates store when a theme is selected', async () => {
    render(<ThemeSelector />, { wrapper })

    await waitFor(() => {
      expect(screen.getByTestId('theme-select')).toBeInTheDocument()
    })

    const select = within(screen.getByTestId('theme-select')).getByRole('combobox')
    fireEvent.mouseDown(select)

    const listbox = await screen.findByRole('listbox')
    const option = await within(listbox).findByText('Politicians')
    fireEvent.click(option)

    expect(useSettingsStore.getState().themeId).toBe(2) // Politicians value from mock is 2
  })
})
