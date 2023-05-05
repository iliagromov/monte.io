import { ProductResponse } from '../api/implementation/products'
import { Product } from '../types/product'
import { getProductById } from './getProductById'

export const mapProductsFromApi = (products: ProductResponse[]): Product[] => {
  return products.map(product => {
    return {
      // ...product,
      id: product.id,
      title: product.title,
      //HOTFIX price
      price: 1,
      pageLink: getProductById(product.id).pageLink,
      img: getProductById(product.id).img,
      hp: {
        percent: product.hp.percent,
        maxIncrease: product.hp.max_increase,
      },
      nm: {
        percent: product.nm.percent,
        maxIncrease: product.nm.max_increase,
      },
    }
  })
}
