import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import disclaimerData from '../../../data/disclaimer'
import {
  backButton,
  buttonChangeCar,
  buttonEmpty,
  paymentIcons,
  subtitleEmpty,
  subtitleWithProduct,
  titleCheckout,
  titleEmpty,
  titleWithProduct,
} from '../../../data/page-cart'
import { STORE } from '../../../data/routes'
import { useShallowEqualSelector } from '../../../hooks/useShallowEqualSelector'
import { Footnote } from '../../ui'
import CartContainer from './components/CartContainer/CartContainer'
import CartEmptyContainer from './components/CartEmptyContainer'

type PageCartProps = {}

const PageCart: FC<PageCartProps> = ({}) => {
  const { productsInCart } = useShallowEqualSelector(state => state.cart)
  const isCartEmpty = productsInCart.length === 0

  return (
    <>
      {isCartEmpty ? (
        <CartEmptyContainer
          title={titleEmpty}
          subtitle={subtitleEmpty}
          btn={buttonEmpty}
          btnHref={STORE}
        />
      ) : (
        <CartContainer
          title={titleWithProduct}
          subtitle={subtitleWithProduct}
          buttonChangeCar={buttonChangeCar}
          titleCheckout={titleCheckout}
          backButton={backButton}
          paymentIcons={paymentIcons as any}
        />
      )}

      <Footnote withContainer className="mb-5 mt-4 mt-lg-5 pt-lg-4">
        <FormattedMessage id={disclaimerData.text} />
      </Footnote>
    </>
  )
}

export default PageCart
