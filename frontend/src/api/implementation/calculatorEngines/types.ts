export type CalculatorEngine = {
  id: number
  title: string
  model: number
  hp: number
  nm: number
}

export type CalculatorEnginesType = {
  count: number
  next?: string
  previous?: string
  results: CalculatorEngine[]
}
