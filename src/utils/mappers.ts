import { Format } from '../models/format'
import { Language } from '../models/language'
import { Theme } from '../models/theme'

export function mapLanguageToCountryCode(language: Language) {
  if (language.value === 0) {
    return 'gb'
  }

  return language.code
}

export function mapLanguageToLanguageName(language: Language) {
  switch (language.value) {
    case 0:
      return 'English'
    case 1:
      return 'Polish'
  }

  return ''
}

export function mapThemeToThemeName(theme: Theme) {
  switch (theme.value) {
    case 0:
      return 'None'
    case 1:
      return 'Proper names'
    case 2:
      return 'Politicians'
  }

  return ''
}

export function mapFormatToFormatName(format: Format) {
  switch (format.value) {
    case 0:
      return 'kebab-case'
    case 1:
      return 'PascalCase'
  }

  return ''
}
