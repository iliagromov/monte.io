import { ProductsType } from './types'

export const api = async (): Promise<ProductsType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v1/products/`
    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: ProductsType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить products', e)
    return e
  }
}
