import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatorCar, cart } from '../../../store'
import { ProductId } from '../../../utils'

type CarState = ReturnType<typeof calculatorCar.selectors.calculatorCar>

export const useGainCalculator = () => {
  const dispatch = useDispatch()
  const [isFirstSeleted, setisFirstSeleted] = useState(false)
  const carState: CarState = useSelector(calculatorCar.selectors.calculatorCar)

  const setIsSelected = (value: boolean) => {
    dispatch(calculatorCar.actions.setIsSelected(value))
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

  const selectedCar = `${carState.calculatorBrand?.title} ${carState.calculatorModel?.title}, ${carState.calculatorEngine?.title}`
  return {
    onSelectsSubmitClick,
    onNewCarClick,
    addToCart,
    selectedCar,
    isFirstSeleted,
    isCarSelected: carState.isSelected,
    selectedCarEngine: carState.calculatorEngine,
  }
}
