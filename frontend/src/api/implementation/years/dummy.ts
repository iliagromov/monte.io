import { YearsType } from '.'

export const dummy = async (): Promise<YearsType> => {
  const itemsCount = 3

  const response: YearsType = {
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
