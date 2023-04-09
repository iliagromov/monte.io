export enum ProductIds {
  gt = '1',
  gtr = '2',
}

export const productIds = {
  gt: ProductIds.gt,
  gtr: ProductIds.gtr,
}

export const productsMap = {
  [ProductIds.gt]: 'gt',
  [ProductIds.gtr]: 'gtr',
}

export type ProductId = ProductIds

export type Product = {
  id: ProductId
  title: string
  price: number
  pageLink: string
  img: any
  hp: {
    percent: number
    maxIncrease: number
  }
  nm: {
    percent: number
    maxIncrease: number
  }
}
