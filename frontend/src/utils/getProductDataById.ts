import { useSelector } from 'react-redux'
import { products } from '../store'
import { Product, ProductId } from '../types/product'

export const getProductDataById = (productId: ProductId): Product => {
  const productsData = useSelector(products.selectors.productsData)

  if (productsData?.length > 0) {
    return productsData.find(p => p.id === productId)
  }
}
