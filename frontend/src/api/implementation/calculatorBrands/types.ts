export type CalculatorBrand = {
  id: number
  title: string
}

export type CalculatorBrandsType = {
  count: number
  next: any
  previous: any
  results: CalculatorBrand[]
}
