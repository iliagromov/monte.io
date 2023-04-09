import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../'

type CarState = {
  maker?: string
  model?: string
  engine?: string
  year?: number
  isSelected: boolean
}

const initialState: CarState = {
  maker: undefined,
  model: undefined,
  engine: undefined,
  year: undefined,
  isSelected: false,
}

const slice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setMaker(state, action: PayloadAction<string>) {
      state.maker = action.payload
    },
    setModel(state, action: PayloadAction<string>) {
      state.model = action.payload
    },
    setEngine(state, action: PayloadAction<string>) {
      state.engine = action.payload
    },
    setYear(state, action: PayloadAction<number>) {
      state.year = action.payload
    },
    setIsSelected(state, action: PayloadAction<boolean>) {
      state.isSelected = action.payload
    },
  },
})

const { reducer } = slice

const actions = {
  ...slice.actions,
}

const selectCar = (state: AppState) => state.car
const selectors = {
  car: selectCar,
}

export { actions, selectors, reducer }
