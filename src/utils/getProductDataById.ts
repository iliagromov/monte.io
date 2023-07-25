// import { useSelector } from 'react-redux'
// import { products } from '../store'
// import { Product, ProductId } from '../types/product'

// export const getProductDataById = (productId: ProductId): Product => {
//   const productsData = useSelector(products.selectors.productsData)
//   console.log("🚀 ~ file: getProductDataById.ts:7 ~ getProductDataById ~ productsData:", productsData)

//   if (productsData?.length > 0) {
//     return productsData.find(p => p.id === productId)
//   }
// }

import { useSelector } from 'react-redux'
import { products } from '../data/products'
import { Product, ProductId } from '../types/product'

export const getProductDataById = (productId: ProductId): Product => {
  return products.find(p => p.id === productId)
}
