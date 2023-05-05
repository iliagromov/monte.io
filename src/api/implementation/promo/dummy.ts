import { PromoType } from '.'

export const dummy = async (): Promise<PromoType> => {
  const response: PromoType = {
    title: 'discountTitle',
    products: [
      {
        product: '1',
        price_with_discount: '220.00',
      },
      {
        product: '2',
        price_with_discount: '260.00',
      },
    ],
  }

  return response
}
