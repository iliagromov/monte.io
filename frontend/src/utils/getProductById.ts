import { Product, ProductId } from '../types/product'
import { products } from '../data/products'

export const getProductById = (id: ProductId): Product => {
  return products.find(p => p.id === id)
}

// TODO: нужно заменить везде использование getProductById на getProductDataById
// запрос делать при первом рендере и мапить данные в нужный формат
// уходим от использования захардкоженных данных в data/products к запросу данных с сервера
