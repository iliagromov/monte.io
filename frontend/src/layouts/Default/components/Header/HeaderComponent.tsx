import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Icon } from '../../../../components/ui'
import { HeaderCartBtn } from '../HeaderCartBtn'
import { HeaderMenuTrigger } from '../HeaderMenuTrigger'
import { HeaderNav } from '../HeaderNav/HeaderNav'
import './style.scss'

export type HeaderNavItem = {
  label: string
  slug: string
  mod?: string
  items?: {
    label: string
    slug: string
  }[]
}

export type HeaderComponentProps = {
  cartCount: number
  baseUrl: string
  closeMenu: () => void
  toggleMenu: () => void
}

export const HeaderComponent: FC<HeaderComponentProps> = ({
  cartCount,
  baseUrl,
  closeMenu,
  toggleMenu,
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto col-md d-lg-none">
            <HeaderMenuTrigger
              className="header__menu-trigger"
              onClick={toggleMenu}
            />
          </div>

          <div className="col col-md-auto d-flex justify-content-center">
            <Link
              to={`${baseUrl}/`}
              className="header__logo"
              onClick={closeMenu}
            >
              <Icon name="logo" />
            </Link>
          </div>

          <div className="col-lg px-0 px-lg-4 order-1 order-lg-0 d-flex justify-content-center">
            {/* <HeaderNav onLinkClick={closeMenu} /> */}
            <div>
            HeaderNav
            </div>
          </div>

          <div className="col-auto col-md col-lg-auto d-flex align-items-center justify-content-end">
            <HeaderCartBtn className="header__cart-btn" count={cartCount} />
          </div>
        </div>
      </div>
    </header>
  )
}
