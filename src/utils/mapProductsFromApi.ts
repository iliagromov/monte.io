import { ProductResponse } from '../api/implementation/products'
import { Product } from '../types/product'
import { getProductDataById } from './getProductDataById'

export const mapProductsFromApi = (products: ProductResponse[]): Product[] => {
  return products.map(product => {
    return {
      // ...product,
      id: product.id,
      title: product.title,
      //HOTFIX price
      // price: 1,
      price:  product.price,
      pageLink: getProductDataById(product.id).pageLink,
      img: getProductDataById(product.id).img,
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
