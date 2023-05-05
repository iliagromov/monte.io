export type SendOrderResponseType = {
  id: string
}

export type SendOrderPayloadType = {
  vehicle: {
    make: string
    model: string
    engine: string
    year: number
  }
  products: {
    id: number
    quantity: number
  }[]
  email: string
  first_name: string
  last_name: string
  address: string
  country: string
  postal_code: string
  phone: string
  promo_code?: string
  address_details?: string
  comment?: string
}
