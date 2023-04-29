import React, { FC, useState, useEffect } from 'react'
const { productIds } = require('../../../types/product')
import cn from 'classnames'
import Img from 'gatsby-image'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'gatsby'
import { FormattedMessage, useIntl } from 'react-intl'
import { Badge, Button, Heading, HeadingProps } from '../../ui'
import { getHrefWithLocale, ProductId } from '../../../utils'
import { getProductDataById } from '../../../utils/getProductDataById'
import './style.scss'

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

const ProductsItem: FC<ProductsItemProps> = ({
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
  const productData = getProductDataById(id)
  // TODO: add status for price loading/error
  const price = productData?.price || 0

  const intl = useIntl()
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

  const renderMoreLink = moreLink && addToCartClick && (
    <div className="row products-item__links justify-content-center">
      <div className="col text-right col-md-3 col-xs-12">
        <Link
          to={getHrefWithLocale(intl, moreLink)}
          className="products-item__link"
        >
          <FormattedMessage id="pageMain.productReadMore" />
          <RightOutlined className="products-item__link-icon" />
        </Link>
      </div>
      <div className="col text-left col-md-3 col-xs-12">
        <Link
          to={getHrefWithLocale(intl, 'cart/')}
          onClick={addToCartClick}
          className="products-item__link products-item__link--btn"
        >
          <span className="d-flex align-items-center">
            <FormattedMessage id="pageMain.productBuy" />
            {` $${price}.00`}
            <RightOutlined className="products-item__link-icon" />
          </span>
        </Link>
      </div>
    </div>
  )

  const renderProductFeaturesList = featuresList && (
    <ul className="products-item__features-list">
      {featuresList.map(featureItem => {
        return (
          <li key={featureItem.id} className="products-item__feature-item">
            <FormattedMessage id={featureItem.text} />
          </li>
        )
      })}
    </ul>
  )

  const rednerAddtoBagBtn =
    !moreLink &&
    (price ? (
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
    ) : (
      <Button disabled={true} className={`products-item__btn-disabled`} block>
        {/*TODO: добавить подстановку данных для out of stock из ответа products от api*/}
        <span>{`Out of stock`}</span>
      </Button>
    ))

  const renderInfoItems = infoItems.map(({ title, descr }) => (
    <div className="products-item__info" key={`${title}_${descr}`}>
      <div className="products-item__info-title">
        +{title}%<sup>*</sup>
      </div>
      <div className="products-item__info-descr">
        <FormattedMessage id={descr} />
      </div>
    </div>
  ))

  const renderFirstPart = (
    <>
      {/*hasNewBadge && (
        <div className="products-item__badge">
          <Badge text="NEW" />
        </div>
      )*/}
      <Heading
        tag="h3"
        like={titleSize}
        className={cn('products-item__title', {
          'products-item__title--badges-offset': isNeededBadgeOffset,
        })}
      >
        {title}
      </Heading>
      {/*<div className="products-item__descr mx-auto">
        <FormattedMessage id={descr} />
      </div>*/}
      <Link to={moreLink}>
        <Img
          className="products-item__img-wrap mx-auto"
          fixed={img.childImageSharp.fixed}
        />
      </Link>
      <div
        className={cn('products-item__info-list', {
          'mt-auto': withColumns,
        })}
      >
        {renderInfoItems}
      </div>
    </>
  )

  const renderSecondPart = (
    <>
      {renderProductFeaturesList}
      {renderMoreLink}
      {rednerAddtoBagBtn}
    </>
  )

  return (
    id === productIds.gt && (
      <div className={cn('products-item', className)}>
        {withColumns ? (
          <div className="row">
            <div className="col-lg py-lg-3 d-flex flex-column">
              {renderFirstPart}
            </div>
            <div className="col-lg py-lg-3 products-item__col-border">
              {renderSecondPart}
            </div>
          </div>
        ) : (
          <>
            {renderFirstPart}
            {renderSecondPart}
          </>
        )}
      </div>
    )
  )
}

export default ProductsItem
