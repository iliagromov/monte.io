// import CartBag from '../../images/icon-cart-bag.svg'
import { Tooltip } from 'antd'
import cn from 'classnames'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { Icon } from '../../../../components/ui'
import { CART } from '../../../../data/routes'
import { getBaseUrl } from '../../../../utils'
import './style.scss'

type HeaderCartBtnProps = {
  count?: number
  className?: string
}

export const HeaderCartBtn: FC<HeaderCartBtnProps> = ({ count, className }) => {
  const intl = useIntl()
  const cartLink = `${getBaseUrl(intl)}${CART}`

  return (
    <Tooltip title="Cart" placement="bottom">
      <Link to={cartLink} className={cn('cart-btn', className)}>
        <Icon name="cart-bag" className="cart-btn__icon" />
        {!!count && <i className="cart-btn__notify">{count}</i>}
      </Link>
    </Tooltip>
  )
}
