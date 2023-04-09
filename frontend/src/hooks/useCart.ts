import { useDispatch } from 'react-redux'
import { cart } from '../store'
import { ProductId } from '../types/product'

export const useCart = () => {
  const dispatch = useDispatch()

  const addToCart = (id: ProductId) => {
    dispatch(cart.actions.addProduct(id))
  }

  return { addToCart }
}
