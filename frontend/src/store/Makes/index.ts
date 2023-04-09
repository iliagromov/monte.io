import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import Service, { MakesType } from '../../api'
import { AppState } from '../'

type MakesState = {
  loading: boolean
  error: boolean
  data: MakesType
}

const initialState: MakesState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'makes',
  initialState,
  reducers: {
    getMakesStart(state) {
      state.loading = true
    },
    getMakesSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getMakesError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const { getMakesStart, getMakesError, getMakesSuccess } = slice.actions

const fetchMakes = (): any => async dispatch => {
  try {
    dispatch(getMakesStart())
    const makes = await Service.getInstance().getMakes()
    dispatch(getMakesSuccess(makes))
  } catch (err) {
    dispatch(getMakesError(err))
  }
}

const selectMakes = (state: AppState) => state.makes
const selectMakesData = createSelector(selectMakes, makes => {
  return makes.data?.results
})

const actions = {
  ...slice.actions,
  fetchMakes,
}

const selectors = {
  makes: selectMakes,
  makesData: selectMakesData,
}

export { actions, selectors, reducer }
