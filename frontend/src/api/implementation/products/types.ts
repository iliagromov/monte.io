import { ProductId } from '../../../types/product'

export type ProductResponse = {
  id: ProductId
  title: string
  fuel_saving: number
  power_increase: number
  price: number
  nm: {
    percent: number
    max_increase: number
  }
  hp: {
    percent: number
    max_increase: number
  }
}

export type ProductsType = {
  count: number
  next: null
  previous: null
  results: ProductResponse[]
}
