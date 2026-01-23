import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { act } from 'react'
import { FormatSelector } from './FormatSelector'
import { useSettingsStore } from '../../stores/settingsStore'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('FormatSelector', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  beforeEach(() => {
    queryClient.clear()
    act(() => {
      useSettingsStore.setState({ formatId: undefined })
    })
  })

  it('renders correctly and shows options', async () => {
    render(<FormatSelector />, { wrapper })

    await waitFor(() => {
      expect(screen.getByTestId('format-select')).toBeInTheDocument()
    })

    const select = within(screen.getByTestId('format-select')).getByRole('combobox')
    fireEvent.mouseDown(select)

    const listbox = await screen.findByRole('listbox')
    expect(listbox).toBeInTheDocument()
    expect(within(listbox).getByText('kebab-case')).toBeInTheDocument()
    expect(within(listbox).getByText('PascalCase')).toBeInTheDocument()
  })

  it('updates store when a format is selected', async () => {
    render(<FormatSelector />, { wrapper })

    await waitFor(() => {
      expect(screen.getByTestId('format-select')).toBeInTheDocument()
    })

    const select = within(screen.getByTestId('format-select')).getByRole('combobox')
    fireEvent.mouseDown(select)

    const listbox = await screen.findByRole('listbox')
    const option = await within(listbox).findByText('PascalCase')
    fireEvent.click(option)

    expect(useSettingsStore.getState().formatId).toBe(1) // PascalCase value from mock is 1
  })
})
