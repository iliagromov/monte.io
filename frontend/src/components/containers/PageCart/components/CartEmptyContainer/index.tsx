import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from '../../../../ui'
import './style.scss'

type CartEmptyContainerProps = {
  title: string
  subtitle: string
  btn: string
  btnHref: string
}

const CartEmptyContainer: FC<CartEmptyContainerProps> = ({
  title,
  subtitle,
  btn,
  btnHref,
}) => {
  return (
    <section className={'section'}>
      <div className="container text-center">
        <h2 className="h1">
          <FormattedMessage id={title} />
        </h2>
        <p className="h4">
          <FormattedMessage id={subtitle} />
        </p>

        <Button className="cart-empty__button" href={btnHref}>
          <span>
            <FormattedMessage id={btn} />
          </span>
        </Button>
      </div>
    </section>
  )
}

export default CartEmptyContainer
