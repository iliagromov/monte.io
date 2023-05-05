import { ProductInCart } from '../store/Cart'
import { PromoProduct } from '../api/implementation/promo'
import { getProductById } from './getProductById'

export const getTotalPriceWithDiscountOfProductsInCart = (
  products: ProductInCart[],
  productsDiscount: PromoProduct[]
): number => {
  let totalPrice = 0

  products.forEach(product => {
    try {
      const { price_with_discount } = productsDiscount.find(
        productDiscount => productDiscount.product === product.id
      )
      totalPrice += product.count * +price_with_discount
    } catch (e) {
      const productData = getProductById(product.id)
      if (productData) {
        // TODO: add status for price loading/error
        const productPrice = productData.price
        totalPrice += product.count * +productPrice
      }
      console.log(e)
    }
  })

  return totalPrice
}
