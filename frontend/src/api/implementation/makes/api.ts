import { MakesType } from '.'

export const api = async (): Promise<MakesType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v1/makes`
    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: MakesType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить Makes', e)
    return e
  }
}
