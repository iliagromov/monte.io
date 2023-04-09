import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../'
import { PromoType } from '../../api/implementation/promo'

export type PromoState = {
  code?: string
  discountData?: PromoType
}

const initialState: PromoState = {
  code: undefined,
  discountData: undefined,
}

const slice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    applyCode(state, action) {
      const { code, data } = action.payload
      state.code = code
      state.discountData = data
    },
  },
})

const { reducer } = slice

const actions = {
  ...slice.actions,
}

const selectCode = (state: AppState) => state.promo.code
const selectDiscountData = (state: AppState) => state.promo.discountData

const selectors = {
  code: selectCode,
  discountData: selectDiscountData,
}

export { actions, selectors, reducer }
