import { Format } from '../models/format'
import { Language } from '../models/language'
import { Theme } from '../models/theme'

export function humanizeTheme(theme: Theme) {
  switch (theme.value) {
    case 0:
      return 'None'
    case 1:
      return 'Proper names'
    case 2:
      return 'Politicians'
    default:
      return undefined
  }
}

export function humanizeLanguage(language: Language) {
  switch (language.value) {
    case 0:
      return 'English'
    case 1:
      return 'Polish'
    default:
      return undefined
  }
}

export function humanizeFormat(format: Format) {
  switch (format.value) {
    case 0:
      return 'kebab-case'
    case 1:
      return 'PascalCase'
    default:
      return undefined
  }
}
