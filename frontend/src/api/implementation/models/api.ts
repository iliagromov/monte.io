import { ModelsType } from '.'

export const api = async (make: string): Promise<ModelsType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v1/models/?make=${make}&limit=999`
    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: ModelsType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить models', e)
    return e
  }
}
