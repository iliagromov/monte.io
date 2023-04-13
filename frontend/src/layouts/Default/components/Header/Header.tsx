import React, { FC, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../../../../store'
import { setMenuShowed } from '../../../../store/Header/actions'
import { getMenuShowed } from '../../../../store/selectors/getMenuShowed'
import { getBaseUrl, toggleBodyNavShowed } from '../../../../utils'
import { HeaderComponent } from './HeaderComponent'

export const Header: FC = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const cartCount: number = useSelector(cart.selectors.numOfProductsInCart)
  const isMenuVisible = getMenuShowed()
  const setMenuVisibility = (value: boolean) => {
    dispatch(setMenuShowed(value))
  }

  const baseUrl = getBaseUrl(intl)

  const toggleMenu = useCallback(() => {
    setMenuVisibility(!isMenuVisible)
    toggleBodyNavShowed(!isMenuVisible)
  }, [isMenuVisible])

  const closeMenu = useCallback(() => {
    setMenuVisibility(false)
    toggleBodyNavShowed(false)
  }, [])

  return (
    <HeaderComponent
      cartCount={cartCount}
      baseUrl={baseUrl}
      closeMenu={closeMenu}
      toggleMenu={toggleMenu}
    />
  )
}
