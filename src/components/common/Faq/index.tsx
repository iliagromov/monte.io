import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'

type FaqSectionProps = {
  title: string
  mod?: 'pt-lg'
  smallTitle?: boolean
  refProp?: any
  className?: string
}

const FaqSection: FC<FaqSectionProps> = ({
  title,
  children,
  mod,
  smallTitle,
  refProp,
  className,
}) => {
  return (
    <section
      className={cn('section faq', className, {
        [`faq--${mod}`]: mod,
      })}
      ref={refProp}
    >
      <div className="container">
        <h2
          className={cn(
            'faq__title',
            { 'text-lg-center h1 mb-4 mb-lg-5': !smallTitle },
            { 'faq__title--small text-md-left h2 mb-4 mb-lg-4': smallTitle }
          )}
        >
          <FormattedMessage id={title} />
        </h2>
        {children}
      </div>
    </section>
  )
}

export default FaqSection
