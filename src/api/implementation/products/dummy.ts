import { ProductsType } from './types'

export const dummy = async (): Promise<ProductsType> => {
  const itemsCount = 3

  const response: ProductsType = {
    count: itemsCount,
    next: null,
    previous: null,
    results: [],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.results.push(2010 + i)
  }

  return response
}
