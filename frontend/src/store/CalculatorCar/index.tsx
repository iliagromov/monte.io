import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../'
import { CalculatorBrand } from '../../api/implementation/calculatorBrands'
import { CalculatorModel } from '../../api/implementation/calculatorModels'
import { CalculatorEngine } from '../../api/implementation/calculatorEngines'

type CalculatorCarState = {
  calculatorBrand?: CalculatorBrand
  calculatorModel?: CalculatorModel
  calculatorEngine?: CalculatorEngine
  isSelected: boolean
}

const initialState: CalculatorCarState = {
  calculatorBrand: undefined,
  calculatorModel: undefined,
  calculatorEngine: undefined,
  isSelected: false,
}

const slice = createSlice({
  name: 'calculatorCar',
  initialState,
  reducers: {
    setCalculatorBrand(state, action: PayloadAction<CalculatorBrand>) {
      state.calculatorBrand = action.payload
    },
    setCalculatorModel(state, action: PayloadAction<CalculatorModel>) {
      state.calculatorModel = action.payload
    },
    setCalculatorEngine(state, action: PayloadAction<CalculatorEngine>) {
      state.calculatorEngine = action.payload
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

const selectCalculatorCar = (state: AppState) => state.calculatorCar
const selectors = {
  calculatorCar: selectCalculatorCar,
}

export { actions, selectors, reducer }
