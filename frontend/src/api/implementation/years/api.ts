import { YearsType } from '.'

export const api = async (
  make: string,
  model: string,
  engine: string
): Promise<YearsType> => {
  try {
    const url = `${process.env.APP_DOMAIN}/api/v1/years/?make=${make}&model=${model}&engine=${engine}`
    const answer = await fetch(url)

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: YearsType = await answer.json()

    return responseJson
  } catch (e) {
    console.warn('Не удалось получить years', e)
    return e
  }
}
