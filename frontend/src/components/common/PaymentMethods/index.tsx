import React, { FC } from 'react'
import cn from 'classnames'
import { Icon, IconProps } from '../../ui'

import './style.scss'

export type PaymentIcon = {
  name: IconProps['name']
  title: string
}

type PaymentMethodsProps = {
  className?: string
  icons: PaymentIcon[]
  isNarrowGapBetweenIcons?: boolean
}

const PaymentMethods: FC<PaymentMethodsProps> = ({
  className,
  icons,
  isNarrowGapBetweenIcons,
}) => {
  return (
    <div className={cn('payments', className)}>
      <ul className="payments__list">
        {icons.map(({ name, title }) => (
          <li
            className={cn('payments__item', `payments__item--${name}`, {
              'payments__item--narrow-gap': isNarrowGapBetweenIcons,
            })}
            key={name}
            title={title}
          >
            <Icon name={name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PaymentMethods
