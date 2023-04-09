import { PromoType } from '.'
import { apiRoutes } from '../../../constants'

export const api = async (code: string): Promise<PromoType> => {
  try {
    const url = `${process.env.APP_DOMAIN}${apiRoutes.promocode}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ code }),
    })

    if (!response.ok) {
      throw new Error(response.status.toString())
    }

    const responseJson: PromoType = await response.json()

    return responseJson
  } catch (e) {
    console.warn('Promocode check error', e)
    // бросаем для дальнейшей обработки ошибки в интерфейсе
    throw e
  }
}
