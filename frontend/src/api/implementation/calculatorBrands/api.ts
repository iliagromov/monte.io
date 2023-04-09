import { CalculatorBrandsType } from './types'

export const api = async (): Promise<CalculatorBrandsType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v0/brands/`
    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: CalculatorBrandsType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить Brands', e)
    return e
  }
}
