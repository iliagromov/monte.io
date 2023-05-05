import { useDispatch, useSelector } from 'react-redux'
import { car } from '../../../../../store'

type CarState = ReturnType<typeof car.selectors.car>

export const useCarSelects = () => {
  const dispatch = useDispatch()

  const { year, model, maker, engine, isSelected }: CarState = useSelector(
    car.selectors.car
  )

  const setIsCarSelected = (value: boolean) =>
    dispatch(car.actions.setIsSelected(value))

  return {
    year,
    model,
    maker,
    engine,
    isCarSelected: isSelected,
    setIsCarSelected,
  }
}
