import { getBaseUrl } from '.'
import { IntlShape } from 'react-intl'

/**
 * Возвращает ссылку с учетом выбранного языка.
 * Если ссылка внешняя, то просто возвращает ее
 * без преобразований.
 *
 * @param  intl  объект плагина intl
 * @param  href  адрес ссылки
 */
const getHrefWithLocale = (intl: IntlShape, href: undefined | string) => {
  const isLocalHref = href
    ? href.startsWith('/') && !href.startsWith('//')
    : false

  if (isLocalHref) {
    return `${getBaseUrl(intl)}${href}`
  }

  return href
}

export default getHrefWithLocale
