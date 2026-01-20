import { mapLanguageToCountryCode } from './mappers'
import { Language } from '../models/language'

describe('mappers', () => {
  describe('mapLanguageToCountryCode', () => {
    it('returns "gb" for language value 0', () => {
      const language: Language = { value: 0, name: 'English', code: 'en' }
      expect(mapLanguageToCountryCode(language)).toBe('gb')
    })

    it('returns the language code for other language values', () => {
      const language: Language = { value: 1, name: 'Polish', code: 'pl' }
      expect(mapLanguageToCountryCode(language)).toBe('pl')
    })
  })
})
