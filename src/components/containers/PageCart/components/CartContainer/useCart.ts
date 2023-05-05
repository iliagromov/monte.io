import { useDispatch, useSelector } from 'react-redux'
import { cart, products } from '../../../../../store'
import { ProductInCart } from '../../../../../store/Cart'
import { Product, ProductId } from '../../../../../types/product'
import { useCarSelects } from './useCarSelects'
import { useCartState } from './useCartState'
import { useCheckoutForm } from './useCheckoutForm'
import { useModal } from './useModal'

type ProductsInCart = ReturnType<typeof cart.selectors.productsInCart>

export const useCart = () => {
  const productsInCart: ProductsInCart = useSelector(
    cart.selectors.productsInCart
  )

  const productsData: Product[] = useSelector(products.selectors.productsData)

  const dispatch = useDispatch()

  const { isModalShowed, openModal, closeModal, currentProductId } = useModal()
  const { cartState, goToCheckout, goToProducts } = useCartState()
  const { formik } = useCheckoutForm()
  const {
    year,
    model,
    maker,
    engine,
    isCarSelected,
    setIsCarSelected,
  } = useCarSelects()

  const incrementItem = (productId: ProductId) => {
    dispatch(cart.actions.addProduct(productId))
  }

  const decrementItem = (productId: ProductId) => {
    const currentProduct = getProductInCartById(productsInCart, productId)

    if (currentProduct.count <= 1) {
      return openModal(productId)
    } else {
      dispatch(cart.actions.decrementProductsCount(productId))
    }
  }

  const removeProduct = () => {
    dispatch(cart.actions.deleteProduct(currentProductId))
    closeModal()
  }

  return {
    // store actions
    removeProduct,
    incrementItem,
    decrementItem,

    // useModal
    isModalShowed,
    openModal,
    closeModal,

    // useCartState
    cartState,
    productsInCart,
    productsData,
    goToCheckout,
    goToProducts,

    // useCheckoutForm
    formik,

    // useCarSelects
    setIsCarSelected,
    maker,
    model,
    engine,
    year,
    isCarSelected,
  }
}

const getProductInCartById = (
  productsInCart: ProductInCart[],
  productId: any
): ProductInCart => productsInCart.find(product => product.id === productId)
