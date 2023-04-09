import { createSlice } from '@reduxjs/toolkit'
import Service, { CalculatorEnginesType } from '../../api'
import { createSelector } from 'reselect'
import { AppState } from '../'

type CalculatorCalculatorEnginesState = {
  loading: boolean
  error: boolean
  data: CalculatorEnginesType
}

const initialState: CalculatorCalculatorEnginesState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'calculatorEngines',
  initialState,
  reducers: {
    getCalculatorEnginesStart(state) {
      state.loading = true
    },
    getCalculatorEnginesSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getCalculatorEnginesError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const {
  getCalculatorEnginesStart,
  getCalculatorEnginesError,
  getCalculatorEnginesSuccess,
} = slice.actions

const fetchCalculatorEngines = (model: number): any => async dispatch => {
  try {
    dispatch(getCalculatorEnginesStart())
    const calculatorEngines = await Service.getInstance().getCalculatorEngines(
      model
    )
    dispatch(getCalculatorEnginesSuccess(calculatorEngines))
  } catch (err) {
    dispatch(getCalculatorEnginesError(err))
  }
}

const actions = {
  ...slice.actions,
  fetchCalculatorEngines,
}

const selectCalculatorEngines = (state: AppState) => state.calculatorEngines
const selectCalculatorEnginesData = createSelector(
  selectCalculatorEngines,
  calculatorEngines => {
    return calculatorEngines.data?.results
  }
)

const selectors = {
  calculatorEngines: selectCalculatorEngines,
  calculatorEnginesData: selectCalculatorEnginesData,
}

export { actions, selectors, reducer }
