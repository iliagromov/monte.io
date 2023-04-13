import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { car, cart } from '../../../store'
import { ProductId } from '../../../types/product'

type CarState = ReturnType<typeof car.selectors.car>

export const useStore = () => {
  const dispatch = useDispatch()
  const [isFirstSeleted, setisFirstSeleted] = useState(false)
  const carState: CarState = useSelector(car.selectors.car)

  const setIsSelected = (value: boolean) => {
    dispatch(car.actions.setIsSelected(value))
  }

  const onSelectsSubmitClick = () => {
    if (!isFirstSeleted) {
      setisFirstSeleted(true)
    }
  }

  const onNewCarClick = () => setIsSelected(false)

  const addToCart = (productId: ProductId) => {
    dispatch(cart.actions.addProduct(productId))
  }

  const selectedCar = `${carState.maker} ${carState.model}, ${carState.engine}, ${carState.year}`

  return {
    onSelectsSubmitClick,
    onNewCarClick,
    addToCart,
    selectedCar,
    isFirstSeleted,
    isCarSelected: carState.isSelected,
    selectedCarEngine: null,
  }
}

export default useStore
