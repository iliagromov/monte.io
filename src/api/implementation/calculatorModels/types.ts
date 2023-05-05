export type CalculatorModel = {
  id: number
  title: string
  brand: number
}

export type CalculatorModelsType = {
  count: number
  next: any
  previous: any
  results: CalculatorModel[]
}
