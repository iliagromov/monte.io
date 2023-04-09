import { MakesType } from '.'

export const dummy = async (): Promise<MakesType> => {
  const itemsCount = 10

  const response: MakesType = {
    count: itemsCount,
    next: null,
    previous: null,
    results: [],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.results.push(`brand ${i}`)
  }

  return response
}
