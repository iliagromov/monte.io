import { CalculatorEnginesType } from '.'

export const dummy = async (model: number): Promise<CalculatorEnginesType> => {
  const itemsCount = 5

  const response: CalculatorEnginesType = {
    data: [
      {
        id: 9995489,
        title: '2.3 i 16V i-VTEC',
        model: 3874,
        hp: 240,
        nm: 353,
      },
      {
        id: 99915840,
        title: '3.5i  V6',
        model: 3874,
        hp: 273,
        nm: 340,
      },
    ],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.data.push({
      id: i,
      title: `${model} engine ${i}`,
      model,
      hp: 200,
      nm: 300,
    })
  }

  return response
}
