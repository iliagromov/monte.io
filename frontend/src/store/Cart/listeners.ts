import { localStorageKeyCart } from '../../constants'

let currentValue
export const cartListener = store => {
  let previousValue = currentValue
  currentValue = store.getState().cart.productsInCart

  if (previousValue !== currentValue) {
    // TODO: global window polyfill
    typeof window !== 'undefined' &&
      window.localStorage.setItem(
        localStorageKeyCart,
        JSON.stringify(currentValue)
      )
  }
}
