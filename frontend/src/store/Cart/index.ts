import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { AppState } from '../'
import { getInitialCartState } from '../utils/getInitialCartState'
import { ProductId } from '../../types/product'

export type ProductInCart = {
  id: ProductId
  count: number
}

export type CartState = {
  productsInCart: ProductInCart[]
}

const initialState: CartState = {
  productsInCart: getInitialCartState(),
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const incrementExistingProduct = state.productsInCart.map(p => {
        return p.id !== action.payload ? p : { ...p, count: p.count + 1 }
      })
      const addNewProduct = [
        ...state.productsInCart,
        { id: action.payload, count: 1 },
      ]
      const isProductAlreadyInCart = state.productsInCart.find(
        p => p.id === action.payload
      )

      state.productsInCart = isProductAlreadyInCart
        ? incrementExistingProduct
        : addNewProduct
    },
    deleteProduct(state, action) {
      state.productsInCart = state.productsInCart.filter(
        p => p.id !== action.payload
      )
    },
    decrementProductsCount(state, action) {
      state.productsInCart = state.productsInCart.map(p => {
        if (p.id !== action.payload) {
          return p
        }

        if (p.count <= 1) {
          // нужно обработать во вьюхе
          // добавлено для перестраховки
          // от отрицательных значений в кол-ве продуктов
          throw new Error('expected deleteProduct action')
        }

        return { ...p, count: p.count - 1 }
      })
    },
  },
})

const { reducer } = slice

const actions = {
  ...slice.actions,
}

const selectCart = (state: AppState) => state.cart
const selectProductsInCart = createSelector(selectCart, cart => {
  return cart.productsInCart
})
const selectNumOfProductsInCart = createSelector(
  selectProductsInCart,
  products => {
    return products.reduce((acc, item) => acc + item.count, 0)
  }
)

const selectors = {
  cart: selectCart,
  productsInCart: selectProductsInCart,
  numOfProductsInCart: selectNumOfProductsInCart,
}

export { actions, selectors, reducer }
