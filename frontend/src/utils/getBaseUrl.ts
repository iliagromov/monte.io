import { IntlShape } from 'react-intl'

const getBaseUrl = ({ locale, defaultLocale }: IntlShape) => {
  const baseUrl = defaultLocale === locale ? '' : `/${locale}`

  return baseUrl
}

export default getBaseUrl
