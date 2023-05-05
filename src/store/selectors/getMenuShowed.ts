import { useSelector } from 'react-redux'
import { AppState } from '../index'

export const getMenuShowed = () => {
  return useSelector((state: AppState) => state.header.menuShowed)
}
