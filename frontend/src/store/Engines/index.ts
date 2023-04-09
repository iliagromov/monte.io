import { createSlice } from '@reduxjs/toolkit'
import Service, { EnginesType } from '../../api'
import { createSelector } from 'reselect'
import { AppState } from '../'

type EnginesState = {
  loading: boolean
  error: boolean
  data: EnginesType
}

const initialState: EnginesState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'engines',
  initialState,
  reducers: {
    getEnginesStart(state) {
      state.loading = true
    },
    getEnginesSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getEnginesError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const { getEnginesStart, getEnginesError, getEnginesSuccess } = slice.actions

const fetchEngines = (make: string, model: string): any => async dispatch => {
  try {
    dispatch(getEnginesStart())
    const engines = await Service.getInstance().getEngines(make, model)
    dispatch(getEnginesSuccess(engines))
  } catch (err) {
    dispatch(getEnginesError(err))
  }
}

const actions = {
  ...slice.actions,
  fetchEngines,
}

const selectEngines = (state: AppState) => state.engines
const selectEnginesData = createSelector(selectEngines, engines => {
  return engines.data?.results
})

const selectors = {
  engines: selectEngines,
  enginesData: selectEnginesData,
}

export { actions, selectors, reducer }
