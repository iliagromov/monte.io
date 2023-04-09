import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import Service, { CalculatorBrandsType } from '../../api'
import { AppState } from '../'

type CalculatorBrandsState = {
  loading: boolean
  error: boolean
  data: CalculatorBrandsType
}

const initialState: CalculatorBrandsState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'calculatorBrands',
  initialState,
  reducers: {
    getCalculatorBrandsStart(state) {
      state.loading = true
    },
    getCalculatorBrandsSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getCalculatorBrandsError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const {
  getCalculatorBrandsStart,
  getCalculatorBrandsError,
  getCalculatorBrandsSuccess,
} = slice.actions

const fetchCalculatorBrands = (): any => async dispatch => {
  try {
    dispatch(getCalculatorBrandsStart())
    const calculatorBrands = await Service.getInstance().getCalculatorBrands()
    dispatch(getCalculatorBrandsSuccess(calculatorBrands))
  } catch (err) {
    dispatch(getCalculatorBrandsError(err))
  }
}

const selectCalculatorBrands = (state: AppState) => state.calculatorBrands
const selectCalculatorBrandsData = createSelector(
  selectCalculatorBrands,
  calculatorBrands => {
    return calculatorBrands.data?.results
  }
)

const actions = {
  ...slice.actions,
  fetchCalculatorBrands,
}

const selectors = {
  calculatorBrands: selectCalculatorBrands,
  calculatorBrandsData: selectCalculatorBrandsData,
}

export { actions, selectors, reducer }
