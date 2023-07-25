import React, { FC, useState, useEffect } from 'react'
const { productIds } = require('../../../types/product')
import cn from 'classnames'
import { Link,  } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Badge, Button, Heading, HeadingProps } from '../../ui'
import { getHrefWithLocale, ProductId } from '../../../utils'
import { getProductDataById } from '../../../utils/getProductDataById'
import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { getPrice } from '../../../utils/getPrice'

type FeatureItem = {
  id: string
  text: string
}

export type ProductsItemProps = {
  id: ProductId
  title: string
  descr: string
  img: any
  power: string | number
  fuelSaving: string | number
  // price подставляем из стора
  // price: string | number
  moreLink?: string
  featuresList?: FeatureItem[]
  addToBagBtnText?: string
  isNeededBadgeOffset?: boolean
  hasNewBadge?: boolean
  withColumns?: boolean
  addToCartClick: () => void
  className?: string
  titleSize?: HeadingProps['like']
}

const ProductsItemStore: FC<ProductsItemProps> = ({
  id,
  isNeededBadgeOffset,
  hasNewBadge,
  title,
  descr,
  img,
  power,
  fuelSaving,
  // price подставляем из стора
  // price,
  moreLink,
  featuresList,
  addToBagBtnText,
  addToCartClick,
  withColumns,
  className,
  titleSize = 'h1',
}) => {
  



  const productData = getPrice(id)
  const price = productData?.price || 0
  // TODO: add status for price loading/error
  // FIXME: pageMain.productPower
  const infoItems = [
    {
      title: power,
      descr: 'pageMain.productPower',
    },
    {
      title: fuelSaving,
      descr: 'pageMain.productFuelSaving',
    },
  ]

  return (
    id === productIds.gt && (
      <div className={cn('products-item', className)}>
        {
          <div className="row">
            <div className="col-lg py-lg-3 d-flex flex-column">
              <Heading
                tag="h3"
                like={titleSize}
                className={cn('products-item__title', {
                  'products-item__title--badges-offset': isNeededBadgeOffset,
                })}
              >
                {title}
              </Heading>
              <div className="products-item__descr mx-auto">
                <FormattedMessage id={descr} />
              </div>
              <Link to={moreLink}>
                <StaticImage
                className="products-item__img-wrap mx-auto"
                  src='../../../assets/images/store-product-yellow.png'
                  alt={'img'}
                />
              </Link>
              <div
                className={cn('products-item__info-list', {
                  'mt-auto': withColumns,
                })}
              >
                {infoItems.map(({ title, descr }, i) => (
                  <div className="products-item__info"  key={`products-item__info_${i}`}>
                    <div className="products-item__info-title">
                      +{title}%<sup>*</sup>
                    </div>
                    <div className="products-item__info-descr">
                      <FormattedMessage id={descr} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg py-lg-3 products-item__col-border">
              <ul className="products-item__features-list">
                {featuresList.map(featureItem => {
                  return (
                    <li
                      key={featureItem.id}
                      className="products-item__feature-item"
                    >
                      <FormattedMessage id={featureItem.text} />
                    </li>
                  )
                })}
              </ul>
              <Button
                onClick={addToCartClick}
                className={`products-item__btn-add-to-cart`}
                block
              >
                <span>
                  <FormattedMessage id={addToBagBtnText} />
                  {` $${price}.00`}
                </span>
              </Button>
            </div>
          </div>
        }
      </div>
    )
  )
}

export default ProductsItemStore
