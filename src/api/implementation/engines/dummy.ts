import { EnginesType } from '.'

export const dummy = async (
  make: string,
  model: string
): Promise<EnginesType> => {
  const itemsCount = 5

  const response: EnginesType = {
    count: itemsCount,
    next: null,
    previous: null,
    results: [],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.results.push(`${make} ${model} engine ${i}`)
  }

  return response
}
