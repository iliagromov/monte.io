import { State, HEADER_SET_MENU_SHOWED, HeaderActionTypes } from './types'

const initialState: State = {
  menuShowed: false,
}

export default function headerReducer(
  state = initialState,
  action: HeaderActionTypes
) {
  switch (action.type) {
    case HEADER_SET_MENU_SHOWED:
      return {
        ...state,
        menuShowed: action.payload,
      }

    default:
      return state
  }
}
