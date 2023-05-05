import cn from 'classnames'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Icon, IconNamesType } from '../../../../ui'
import './style.scss'

export type AdvantagesType = {
  iconName: IconNamesType
  text: string
}

type ProductImageAndInfoProps = {
  img: FluidObject
  power: string | number
  fuelSaving: string | number
  advantages?: AdvantagesType[]
  className?: string
}

export const ProductImageAndInfo: FC<ProductImageAndInfoProps> = ({
  img,
  power,
  fuelSaving,
  advantages,
  className,
}) => {
  const infoItems = [
    {
      value: power,
      descr: 'pageMain.productPower',
    },
    {
      value: fuelSaving,
      descr: 'pageMain.productFuelSaving',
    },
  ]

  const renderInfoItems = infoItems.map(({ value, descr }) => (
    <div className="product-image-and-info__info" key={`${value}_${descr}`}>
      <div className="product-image-and-info__info-title">+ {value}%</div>
      <div className="product-image-and-info__info-descr">
        <FormattedMessage id={descr} />
      </div>
    </div>
  ))

  const renderAdvantages = advantages?.map(({ iconName, text }) => (
    <div className="col-4 px-2" key={`${iconName}_${text}`}>
      <div className="advantage-item">
        <Icon
          name={iconName}
          className={cn(
            'advantage-item__icon',
            `advantage-item__icon--${iconName}`
          )}
        />
        <div className="advantage-item__text">
          <FormattedMessage id={text} />
        </div>
      </div>
    </div>
  ))

  return (
    <div className={cn('product-image-and-info', className)}>
      <Img className="product-image-and-info__image" fluid={img} />
      <div className="product-image-and-info__info-list">{renderInfoItems}</div>
      {advantages && (
        <div className="product-image-and-info__advantages mx-n3 mx-sm-0">
          <div className="row mx-n2 justify-content-center">
            {renderAdvantages}
          </div>
        </div>
      )}
    </div>
  )
}
