import { ProductIds } from '../../../types/product'

export type PromoProduct = {
  product: ProductIds
  price_with_discount: string
}

export type PromoType = {
  title: string
  products: PromoProduct[]
}
