import { CalculatorModelsType } from '.'

export const api = async (brand: number): Promise<CalculatorModelsType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v0/models/?brand=${brand}`

    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: CalculatorModelsType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить models', e)
    return e
  }
}
