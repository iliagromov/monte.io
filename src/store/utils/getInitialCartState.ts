import { ProductInCart } from '../Cart'
import { localStorageKeyCart } from '../../constants'
import { getProductDataById } from '../../utils'

export const getInitialCartState = (): ProductInCart[] => {
  try {
    // TODO: global window polyfill
    if (typeof window !== 'undefined') {
      const cartItems = JSON.parse(
        window.localStorage.getItem(localStorageKeyCart)
      )

      if (cartItems?.length > 0) {
        // case with wrong ids in localstorage: [{"id":"1","count":3},{"id":"2","count":2},{"id":"WRONG ID","count":1}]
        return cartItems.filter(product => Boolean(getProductDataById(product.id)))
      }

      return cartItems || []
    }
  } catch (e) {
    console.error('wrong value in localstorage', e)
    // TODO: global window polyfill
    typeof window !== 'undefined' &&
      window.localStorage.removeItem(localStorageKeyCart)
  }

  return []
}
