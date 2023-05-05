import { useSelector } from 'react-redux'
import { products } from '../data/products'
import { Product, ProductId } from '../types/product'

export const getProductDataById = (productId: ProductId): Product => {
  return products.find(p => p.id === id)
}
