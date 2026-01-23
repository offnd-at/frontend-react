import { humanizeFormat, humanizeLanguage, humanizeTheme } from './humanizers'
import { Format } from '../models/format'
import { Language } from '../models/language'
import { Theme } from '../models/theme'

describe('humanizers', () => {
  describe('humanizeTheme', () => {
    it('returns "None" for theme value 0', () => {
      expect(humanizeTheme({ value: 0 } as Theme)).toBe('None')
    })

    it('returns "Proper names" for theme value 1', () => {
      expect(humanizeTheme({ value: 1 } as Theme)).toBe('Proper names')
    })

    it('returns "Politicians" for theme value 2', () => {
      expect(humanizeTheme({ value: 2 } as Theme)).toBe('Politicians')
    })

    it('returns "Unknown theme" for unknown theme value', () => {
      expect(humanizeTheme({ value: 99 } as Theme)).toBe('Unknown theme')
    })
  })

  describe('humanizeLanguage', () => {
    it('returns "English" for language value 0', () => {
      expect(humanizeLanguage({ value: 0 } as Language)).toBe('English')
    })

    it('returns "Polish" for language value 1', () => {
      expect(humanizeLanguage({ value: 1 } as Language)).toBe('Polish')
    })

    it('returns "Unknown language" for unknown language value', () => {
      expect(humanizeLanguage({ value: 99 } as Language)).toBe('Unknown language')
    })
  })

  describe('humanizeFormat', () => {
    it('returns "kebab-case" for format value 0', () => {
      expect(humanizeFormat({ value: 0 } as Format)).toBe('kebab-case')
    })

    it('returns "PascalCase" for format value 1', () => {
      expect(humanizeFormat({ value: 1 } as Format)).toBe('PascalCase')
    })

    it('returns "Unknown format" for unknown format value', () => {
      expect(humanizeFormat({ value: 99 } as Format)).toBe('Unknown format')
    })
  })
})
