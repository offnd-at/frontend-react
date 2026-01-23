import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { act } from 'react'
import { LanguageSelector } from './LanguageSelector'
import { useSettingsStore } from '../../stores/settingsStore'
import { createTestQueryClient, createWrapper } from '../../test/utils'

describe('LanguageSelector', () => {
  const queryClient = createTestQueryClient()
  const wrapper = createWrapper(queryClient)

  beforeEach(() => {
    queryClient.clear()
    act(() => {
      useSettingsStore.setState({ languageId: undefined })
    })
  })

  it('renders correctly and shows options', async () => {
    render(<LanguageSelector />, { wrapper })

    await waitFor(() => {
      expect(screen.getByTestId('language-select')).toBeInTheDocument()
    })

    const select = within(screen.getByTestId('language-select')).getByRole('combobox')
    fireEvent.mouseDown(select)

    const listbox = await screen.findByRole('listbox')
    expect(listbox).toBeInTheDocument()
    expect(within(listbox).getByText('English')).toBeInTheDocument()
    expect(within(listbox).getByText('Polish')).toBeInTheDocument()
  })

  it('updates store when a language is selected', async () => {
    render(<LanguageSelector />, { wrapper })

    await waitFor(() => {
      expect(screen.getByTestId('language-select')).toBeInTheDocument()
    })

    const select = within(screen.getByTestId('language-select')).getByRole('combobox')
    fireEvent.mouseDown(select)

    const listbox = await screen.findByRole('listbox')
    const option = await within(listbox).findByText('Polish')
    fireEvent.click(option)

    expect(useSettingsStore.getState().languageId).toBe(1) // Polish value from mock is 1
  })
})
