import { render, screen, fireEvent } from '@testing-library/react'
import { GenerateUrlTextField } from './GenerateUrlTextField'

describe('GenerateUrlTextField', () => {
  const defaultProps = {
    url: '',
    setUrl: vi.fn(),
    onSubmit: vi.fn(),
  }

  it('renders input with placeholder', () => {
    render(<GenerateUrlTextField {...defaultProps} />)
    expect(screen.getByPlaceholderText('https://offnd.at')).toBeInTheDocument()
  })

  it('calls setUrl on input change', () => {
    const setUrl = vi.fn()
    render(<GenerateUrlTextField {...defaultProps} setUrl={setUrl} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'https://example.com' } })
    expect(setUrl).toHaveBeenCalledWith('https://example.com')
  })

  it('calls onSubmit when Generate button is clicked', () => {
    const onSubmit = vi.fn()
    render(<GenerateUrlTextField {...defaultProps} onSubmit={onSubmit} />)
    const button = screen.getByRole('button', { name: /generate/i })
    fireEvent.click(button)
    expect(onSubmit).toHaveBeenCalled()
  })

  it('shows clear button when url is not empty and calls setUrl with empty string when clicked', () => {
    const setUrl = vi.fn()
    render(<GenerateUrlTextField {...defaultProps} url='https://test.com' setUrl={setUrl} />)
    const clearButton = screen.getByTestId('clear-button')
    fireEvent.click(clearButton)
    expect(setUrl).toHaveBeenCalledWith('')
  })
  it('is disabled when loading prop is true', () => {
    render(<GenerateUrlTextField {...defaultProps} loading={true} />)
    const button = screen.getByRole('button', { name: /generate/i })
    expect(button).toBeDisabled()
  })

  it('does not show clear button when url is empty', () => {
    render(<GenerateUrlTextField {...defaultProps} url='' />)
    expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument()
  })

  it('focuses input on mount', () => {
    render(<GenerateUrlTextField {...defaultProps} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveFocus()
  })

  it('focuses input when Ctrl + / is pressed', () => {
    render(<GenerateUrlTextField {...defaultProps} />)
    const input = screen.getByRole('textbox')
    input.blur()
    expect(input).not.toHaveFocus()

    fireEvent.keyDown(window, { key: '/', ctrlKey: true })
    expect(input).toHaveFocus()
  })

  it('focuses input when Meta + / is pressed', () => {
    render(<GenerateUrlTextField {...defaultProps} />)
    const input = screen.getByRole('textbox')
    input.blur()
    expect(input).not.toHaveFocus()

    fireEvent.keyDown(window, { key: '/', metaKey: true })
    expect(input).toHaveFocus()
  })
})
