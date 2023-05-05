import React, { FC, useCallback } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import './style.scss'

type ProductsProps = {
  title?: string
  subtitle?: string
  className?: string
}

const Products: FC<ProductsProps> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  const modifyChildren = useCallback((child: any) => {
    return (
      <div className="col-md products__item">{React.cloneElement(child)}</div>
    )
  }, [])

  return (
    <section className={cn('section', 'products', className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="products__header">
            {title && (
              <h2 className="products__title text-center h1">
                <FormattedMessage id={title} />
              </h2>
            )}
            {subtitle && (
              <p className="products__subtitle text-center h4">
                <FormattedMessage id={subtitle} />
              </p>
            )}
          </div>
        )}

        <div className="row no-gutters products__list">
          {React.Children.map(children, child => modifyChildren(child))}
        </div>
      </div>
    </section>
  )
}

export default Products
