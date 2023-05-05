import React, { FC } from 'react'
import cn from 'classnames'
import { Icon, IconProps } from '../../ui'

import './style.scss'
import { ReactSVG } from 'react-svg'
import { graphql, useStaticQuery } from 'gatsby'

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
  const {
    paymentsIcon1,
    paymentsIcon2,
    paymentsIcon3,
    paymentsIcon4,
    paymentsIcon5,
  } = useStaticQuery(graphql`
      query{
        paymentsIcon1: file(relativePath: { eq: "stripe.svg" }) {
            publicURL
            name
        }
        paymentsIcon2: file(relativePath: { eq: "mastercard.svg" }) {
            publicURL
            name
        }
        paymentsIcon3: file(relativePath: { eq: "visa.svg" }) {
            publicURL
            name
        }
        paymentsIcon4: file(relativePath: { eq: "ssl.svg" }) {
            publicURL
            name
        }
        paymentsIcon5: file(relativePath: { eq: "transferbank.svg" }) {
            publicURL
            name
        }
      }
    `)
  return (
    <div className={cn('payments', className)}>
      <ul className="payments__list">
        <li className={cn('payments__item', {
              'payments__item--narrow-gap': isNarrowGapBetweenIcons,
            })}
          >
             <ReactSVG className="page-icon" src={paymentsIcon1.publicURL} />
          </li>
        <li className={cn('payments__item', {
              'payments__item--narrow-gap': isNarrowGapBetweenIcons,
            })}
          >
             <ReactSVG className="page-icon" src={paymentsIcon2.publicURL} />
          </li>
        <li className={cn('payments__item', {
              'payments__item--narrow-gap': isNarrowGapBetweenIcons,
            })}
          >
             <ReactSVG className="page-icon" src={paymentsIcon3.publicURL} />
          </li>
        <li className={cn('payments__item', {
              'payments__item--narrow-gap': isNarrowGapBetweenIcons,
            })}
          >
             <ReactSVG className="page-icon" src={paymentsIcon4.publicURL} />
          </li>
        <li className={cn('payments__item', {
              'payments__item--narrow-gap': isNarrowGapBetweenIcons,
            })}
          >
             <ReactSVG className="page-icon" src={paymentsIcon5.publicURL} />
          </li>
      </ul>
    </div>
  )
}

export default PaymentMethods
