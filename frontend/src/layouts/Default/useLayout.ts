import { graphql, useStaticQuery } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { useEffect } from 'react'
import { useLocation } from '@reach/router'
import { products } from '../../store'
import { CART } from '../../data/routes'

type ProductsState = ReturnType<typeof products.selectors.products>

export const useLayout = () => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const {
    languages: { langs, defaultLangKey },
  } = data.site.siteMetadata
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname)
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/')
  const langsMenu = getLangs(
    langs,
    langKey,
    getUrlForLang(homeLink, pathname)
  ).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/'),
  }))

  const baseUrl = defaultLangKey === langKey ? '' : `/${langKey}`
  const isDevPage = pathname === `/dev/`
  const isCartPage = pathname === `${baseUrl}${CART}`
  // const isMonteGTPage = url === `${baseUrl}${MONTE_GT}`

  // const needToShowWarranty = !isDevPage && !isMonteGTPage
  const needToShowWarranty = !isDevPage
  const needToShowSubscribe = needToShowWarranty && !isCartPage

  const productsState: ProductsState = useSelector(products.selectors.products)

  // получаем продукты с сервера, мапим данные для формата,
  // который ожидается на фронте, берем цену из полученных данных
  useEffect(() => {
    if (!productsState.loading && productsState.data?.length > 0) {
      return
    }
    dispatch(products.actions.fetchProducts())
  }, [productsState])

  return {
    langKey,
    needToShowSubscribe,
    needToShowWarranty,
    langsMenu,
  }
}
