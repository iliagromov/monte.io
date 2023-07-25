import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { Product } from '../../types/product'
import { AppState } from '../index'
import { mapProductsFromApi } from '../../utils'
import Service from '../../api'
import  { ProductsType } from '../../api';

export type ProductState = {
  loading: boolean
  error: boolean
  data: Product[]
}

const initialState: ProductState = {
  loading: false,
  error: false,
  data: undefined,
}

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart(state) {
      state.loading = true
    },
    getProductsSuccess(state, action: { payload: ProductsType }) {
      state.loading = false
      state.data = mapProductsFromApi(action.payload.results)
    },
    getProductsError(state, action) {
      // console.log(action)
      state.loading = false
      state.error = action.payload
    },
  },
})

const { reducer } = slice
const { getProductsStart, getProductsError, getProductsSuccess } = slice.actions

const fetchProducts = (): any => async dispatch => {
  try {
    dispatch(getProductsStart())
    const products = await Service.getInstance().getProducts()
    dispatch(getProductsSuccess(products))
  } catch (err) {
    dispatch(getProductsError(err))
  }
}

const actions = {
  ...slice.actions,
  fetchProducts,
}

const selectProducts = (state: AppState) => state.products
const selectProductsData = createSelector(selectProducts, products => {
  return products.data
})

const selectors = {
  products: selectProducts,
  productsData: selectProductsData,
}

export { actions, selectors, reducer }
