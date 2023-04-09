import { CalculatorEnginesType } from '.'

export const api = async (model: number): Promise<CalculatorEnginesType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v0/modifications/?model=${model}`

    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: CalculatorEnginesType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить engines', e)
    return e
  }
}
