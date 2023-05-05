import { HEADER_SET_MENU_SHOWED } from './types'

export const setMenuShowed = (menuShowed: boolean) => ({
  type: HEADER_SET_MENU_SHOWED,
  payload: menuShowed,
})

export type setMenuShowedType = typeof setMenuShowed
