import { ptBR } from './pt-BR'
import { enUS } from './en-US'

export const translations = {
  'pt-BR': ptBR,
  'en-US': enUS
}

export const getTranslation = (language, path) => {
  const keys = path.split('.')
  let value = translations[language]
  
  for (const key of keys) {
    if (value && typeof value === 'object') {
      value = value[key]
    } else {
      return path
    }
  }
  
  return value || path
}

