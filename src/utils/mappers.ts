import { Language } from '../models/language'

export function mapLanguageToCountryCode(language: Language) {
  if (language.value === 0) {
    return 'gb'
  }

  return language.code
}
