import { vi, beforeAll, afterAll, afterEach } from 'vitest'
import '@testing-library/jest-dom'
import { server } from './src/test/server'

vi.mock('@mui/icons-material', () => ({
  ContentCopy: () => 'ContentCopyIcon',
  Close: () => 'CloseIcon',
  OpenInNew: () => 'OpenInNewIcon',
}))

document.documentElement.scrollTo = vi.fn()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
