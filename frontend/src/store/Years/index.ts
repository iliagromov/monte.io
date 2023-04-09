import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import Service, { YearsType } from '../../api'
import { AppState } from '../'

type YearsState = {
  loading: boolean
  error: boolean
  data: YearsType
}

const initialState: YearsState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'years',
  initialState,
  reducers: {
    getYearsStart(state) {
      state.loading = true
    },
    getYearsSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getYearsError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const { getYearsStart, getYearsError, getYearsSuccess } = slice.actions

const fetchYears = (
  make: string,
  model: string,
  engine: string
): any => async dispatch => {
  try {
    dispatch(getYearsStart())
    const years = await Service.getInstance().getYears(make, model, engine)
    dispatch(getYearsSuccess(years))
  } catch (err) {
    dispatch(getYearsError(err))
  }
}

const actions = {
  ...slice.actions,
  fetchYears,
}

const selectYears = (state: AppState) => state.years
const selectYearsData = createSelector(selectYears, years => {
  return years.data?.results
})

const selectors = {
  years: selectYears,
  yearsData: selectYearsData,
}

export { actions, selectors, reducer }
