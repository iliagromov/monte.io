export type State = {
  menuShowed: boolean
}

export const HEADER_SET_MENU_SHOWED = 'HEADER_SET_MENU_SHOWED'

export type HeaderSetMenuShowedAction = {
  type: typeof HEADER_SET_MENU_SHOWED
  payload: boolean
}

export type HeaderActionTypes = HeaderSetMenuShowedAction
