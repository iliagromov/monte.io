import { SendOrderResponseType, SendOrderPayloadType } from '.'

export type SendOrderArgsType = {
  email: string
  firstName: string
  lastName: string
  address: string
  addressDetails?: string
  country: string
  postalCode: string
  phone: string
  comment?: string
  vehicle: {
    make: string
    model: string
    engine: string
    year: number
  }
  promoCode?: string
  products: {
    id: number
    quantity: number
  }[]
}

export const api = async (
  args: SendOrderArgsType
): Promise<SendOrderResponseType> => {
  try {
    const url: string = `${process.env.APP_DOMAIN}/api/v1/orders/`

    const params: SendOrderPayloadType = {
      email: args.email,
      first_name: args.firstName,
      last_name: args.lastName,
      address: args.address,
      address_details: args.addressDetails,
      country: args.country,
      postal_code: args.postalCode,
      phone: args.phone,
      comment: args.comment,
      vehicle: args.vehicle,
      products: args.products,
      promo_code: args.promoCode,
    }

    const answer = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(params),
    })

    if (!answer.ok) {
      throw new Error(answer.status.toString())
    }

    const responseJson: SendOrderResponseType = await answer.json()
    return responseJson
  } catch (e) {
    console.warn('Не удалось отправить данные', e)

    return e
  }
}
