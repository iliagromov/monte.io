import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import Service, { CalculatorModelsType } from '../../api'
import { AppState } from '../'

type CalculatorModelsState = {
  loading: boolean
  error: boolean
  data: CalculatorModelsType
}

const initialState: CalculatorModelsState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'calculatorModels',
  initialState,
  reducers: {
    getCalculatorModelsStart(state) {
      state.loading = true
    },
    getCalculatorModelsSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getCalculatorModelsError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const {
  getCalculatorModelsStart,
  getCalculatorModelsError,
  getCalculatorModelsSuccess,
} = slice.actions

const fetchCalculatorModels = (
  calculatorBrand: number
): any => async dispatch => {
  try {
    dispatch(getCalculatorModelsStart())
    const calculatorModels = await Service.getInstance().getCalculatorModels(
      calculatorBrand
    )
    dispatch(getCalculatorModelsSuccess(calculatorModels))
  } catch (err) {
    dispatch(getCalculatorModelsError(err))
  }
}

const selectCalculatorModels = (state: AppState) => state.calculatorModels
const selectCalculatorModelsData = createSelector(
  selectCalculatorModels,
  calculatorModels => {
    return calculatorModels.data?.results
  }
)

const actions = {
  ...slice.actions,
  fetchCalculatorModels,
}

const selectors = {
  calculatorModels: selectCalculatorModels,
  calculatorModelsData: selectCalculatorModelsData,
}

export { actions, selectors, reducer }
