import cn from 'classnames'
import { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from '../../../../ui'
import { AdvantagesType, ProductImageAndInfo } from '../ProductImageAndInfo'
import './style.scss'

const blockName = 'product-info-section'

export type ProductInfoSectionProps = {
  productImage: FluidObject
  power: string | number
  fuelSaving: string | number
  advantages: AdvantagesType[]
  title: string
  description: string
  price: number
  className?: string
}

const ProductInfoSection: FC<ProductInfoSectionProps> = ({
  productImage,
  power,
  fuelSaving,
  advantages,
  title,
  description,
  price,
  className,
}) => {
  return (
    <div className={cn(`${blockName}`, className)}>
      <div className="row">
        <div className="col-md-6 order-md-1 pt-md-4 mb-5 mb-md-0 pl-lg-5">
          <ProductImageAndInfo
            img={productImage}
            power={power}
            fuelSaving={fuelSaving}
            advantages={advantages}
          />
        </div>

        <div className="col-md-6 d-flex flex-column">
          <div className={`${blockName}__description`}>
            <h2 className={`${blockName}__title h2`}>{title}</h2>
            <p className={`${blockName}__descr-content m-0`}>
              <FormattedMessage id={description} />
            </p>
          </div>

          <div className={`${blockName}__panel`}>
            <Button className={`${blockName}__btn`}>
              <span>
                <FormattedMessage id="productInfoSection.learnMore" />
              </span>
            </Button>
            <div className={`${blockName}__price`}>{`$${price.toFixed(
              2
            )}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoSection
