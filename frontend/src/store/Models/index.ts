import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import Service, { ModelsType } from '../../api'
import { AppState } from '../'

type ModelsState = {
  loading: boolean
  error: boolean
  data: ModelsType
}

const initialState: ModelsState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'models',
  initialState,
  reducers: {
    getModelsStart(state) {
      state.loading = true
    },
    getModelsSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },
    getModelsError(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const { getModelsStart, getModelsError, getModelsSuccess } = slice.actions

const fetchModels = (make: string): any => async dispatch => {
  try {
    dispatch(getModelsStart())
    const models = await Service.getInstance().getModels(make)
    dispatch(getModelsSuccess(models))
  } catch (err) {
    dispatch(getModelsError(err))
  }
}

const selectModels = (state: AppState) => state.models
const selectModelsData = createSelector(selectModels, models => {
  return models.data?.results
})

const actions = {
  ...slice.actions,
  fetchModels,
}

const selectors = {
  models: selectModels,
  modelsData: selectModelsData,
}

export { actions, selectors, reducer }
