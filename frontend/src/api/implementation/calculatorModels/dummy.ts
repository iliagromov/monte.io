import { CalculatorModelsType } from '.'

export const dummy = async (brand: number): Promise<CalculatorModelsType> => {
  const itemsCount = 10

  const response: CalculatorModelsType = {
    data: [
      {
        id: 99918509,
        title: 'CL ',
        brand: 2198,
      },
      {
        id: 3870,
        title: 'MDX',
        brand: 2198,
      },
      {
        id: 3874,
        title: 'RDX',
        brand: 2198,
      },
      {
        id: 3876,
        title: 'RSX',
        brand: 2198,
      },
      {
        id: 99915188,
        title: 'TL',
        brand: 2198,
      },
      {
        id: 11965,
        title: 'TLX',
        brand: 2198,
      },
      {
        id: 3880,
        title: 'ZDX',
        brand: 2198,
      },
    ],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.data.push({
      id: i,
      title: `${brand} model ${i}`,
      brand,
    })
  }

  return response
}
