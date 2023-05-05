import { ModelsType } from '.'

export const dummy = async (make: string): Promise<ModelsType> => {
  const itemsCount = 10

  const response: ModelsType = {
    count: itemsCount,
    next: null,
    previous: null,
    results: [],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.results.push(`${make} model ${i}`)
  }

  return response
}
