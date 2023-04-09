import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import headerReducer from './Header/reducers'
import * as products from './Products'
import * as cart from './Cart'
import * as makes from './Makes'
import * as models from './Models'
import * as engines from './Engines'
import * as years from './Years'
import * as car from './Car'
import * as calculatorBrands from './CalculatorBrands'
import * as calculatorModels from './CalculatorModels'
import * as calculatorEngines from './CalculatorEngines'
import * as calculatorCar from './CalculatorCar'
import * as promo from './Promo'
import * as feedbackPopup from './FeedbackPopup'
import { cartListener } from './Cart/listeners'

const rootReducer = combineReducers({
  products: products.reducer,
  header: headerReducer,
  cart: cart.reducer,
  makes: makes.reducer,
  models: models.reducer,
  engines: engines.reducer,
  years: years.reducer,
  car: car.reducer,
  calculatorBrands: calculatorBrands.reducer,
  calculatorModels: calculatorModels.reducer,
  calculatorEngines: calculatorEngines.reducer,
  calculatorCar: calculatorCar.reducer,
  promo: promo.reducer,
  feedbackPopup: feedbackPopup.reducer,
})

export default function configureStore() {
  const middlewares = [reduxThunk]

  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )

  store.subscribe(() => cartListener(store))

  return store
}

export type AppState = ReturnType<typeof rootReducer>
export type Store = ReturnType<typeof configureStore>

export {
  products,
  makes,
  engines,
  models,
  years,
  car,
  calculatorBrands,
  calculatorModels,
  calculatorEngines,
  calculatorCar,
  cart,
  promo,
  feedbackPopup,
}
