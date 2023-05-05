import { ProductInCart } from '../../../store/Cart'

export const getProductsInCartMock = (): ProductInCart[] => {
  return [
    { id: 1, count: 2 },
    { id: 2, count: 1 },
  ]
}
