import { getProductDataById } from './getProductDataById'
import { ProductInCart } from '../store/Cart'

export const getTotalPriceOfProductsInCart = (
  products: ProductInCart[]
): number => {
  let totalPrice = 0
  products.forEach(product => {
    const productData = getProductDataById(product.id)
    // TODO: add status for price loading/error
    const productPrice = productData ? +productData.price : 0
    totalPrice += productPrice * product.count
  })
  return totalPrice
}
