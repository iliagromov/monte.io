import { getProductById } from './getProductById'
import { ProductId } from '../types/product'

/**
 * power gain calculation
 * @param value    car hp / nm value
 * @param product  product type
 * @return         hp gain number
 */
const getCarPowerGain = function ({
  value,
  productId,
  type,
}: {
  value: string | number
  productId: ProductId
  type: 'hp' | 'nm'
}) {
  const product = getProductById(productId)

  const { percent, maxIncrease } = product[type]
  const increase = Math.round((+value / 100) * percent)
  return increase > maxIncrease ? maxIncrease : increase
}

export default getCarPowerGain
