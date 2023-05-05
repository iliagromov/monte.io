import { EnginesType } from '.'

export const api = async (
  make: string,
  model: string
): Promise<EnginesType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v1/engines/?make=${make}&model=${model}`
    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: EnginesType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить engines', e)
    return e
  }
}
