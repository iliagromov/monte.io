import { useState } from 'react'

type CartState = 'products' | 'checkout'
export const cartStates: Record<CartState, CartState> = {
  products: 'products',
  checkout: 'checkout',
}

export const useCartState = () => {
  const [cartState, setCartState] = useState<CartState>(cartStates.products)

  const goToCheckout = () => setCartState(cartStates.checkout)
  const goToProducts = () => setCartState(cartStates.products)

  return {
    cartState,
    goToCheckout,
    goToProducts,
  }
}
