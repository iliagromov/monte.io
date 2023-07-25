import { ProductInCart } from '../store/Cart'
import { PromoProduct } from '../api/implementation/promo'
import { getProductDataById } from './getProductDataById'

export const getTotalDiscountSumForProductsInCart = (
  productsInCart: ProductInCart[],
  productsDiscount: PromoProduct[]
): number => {
  let totalDiscount = 0

  productsInCart.forEach(product => {
    try {
      const productData = getProductDataById(product.id)
      // TODO: add status for price loading/error
      const productPrice = productData ? productData.price : 0
      const productPriceWithDiscount = +productsDiscount.find(
        p => p.product === product.id
      ).price_with_discount
      const productDiscountSum = productPrice - productPriceWithDiscount
      totalDiscount += productDiscountSum * product.count
    } catch (e) {
      console.log(e)
    }
  })

  return totalDiscount
}
