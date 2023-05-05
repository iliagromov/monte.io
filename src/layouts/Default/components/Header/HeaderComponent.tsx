import { Link, graphql,useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Icon } from '../../../../components/ui'
import { HeaderCartBtn } from '../HeaderCartBtn'
import { HeaderMenuTrigger } from '../HeaderMenuTrigger'
import { HeaderNav } from '../HeaderNav/HeaderNav'
import './style.scss'
import { ReactSVG } from 'react-svg'

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
  const {
    logoMobile
  } = useStaticQuery(graphql`
    query {
      logoMobile: file(relativePath: { eq: "logoMobile.svg" }) {
          publicURL
          name
      }
    }`)
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
        

          <div className="col-auto col-md">
            <Link
              to={`${baseUrl}/`}
              className="header__logo"
              onClick={closeMenu}
            >
              <div className="header__logo_mobile">
                <ReactSVG className="page-icon" src={logoMobile.publicURL} />
              </div>
              
              <div className="header__logo_desktop">
                <Icon name="logo" />
              </div>
              
            </Link>
          </div>

          <div className="col d-flex col-md justify-content-center d-lg-none">
          
            <Link className='linkButton' to={'/store'}>
              Store
            </Link>
          </div>
          <div className="col-auto px-0 px-lg-4 order-1 order-lg-0 d-flex justify-content-center">
            <HeaderNav onLinkClick={closeMenu} />
            <div>
            </div>
          </div>

          <div className="col-auto col-md col-lg-auto d-flex align-items-center justify-content-end">
            <HeaderCartBtn className="header__cart-btn" count={cartCount} />
          </div>

          <div className="col-auto col-md d-lg-none">
            <HeaderMenuTrigger
              className="header__menu-trigger"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
