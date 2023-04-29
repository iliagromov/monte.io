import React, { FC, useState, useEffect } from 'react'
const { productIds } = require('../../../../../types/product')
import cn from 'classnames'
import Img from 'gatsby-image'
import { RightOutlined } from '@ant-design/icons'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FormattedMessage, useIntl } from 'react-intl'
import { Badge, Button, Heading, HeadingProps } from '../../../../ui'
import { getHrefWithLocale, ProductId } from '../../../../../utils'
import { getProductDataById } from '../../../../../utils/getProductDataById'
import './style.scss'
import Feedback from '../../../PageMonteGT/components/Feedback'
import FeedbackRating from '../../../PageMonteGT/components/FeedbackRating'
import { Reviews } from '../../../PageMonteGT/components/Reviews'
import {
  reviews,
  votes,
} from '../../../../../data/page-gt'

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
  const productData = getProductDataById(id)
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

  const {
    productGT,
    feedbackStarts,
    feedback
  } = useStaticQuery(graphql`
    query {
      productGT: file(relativePath: { eq: "product-GT.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      feedbackStarts: file(relativePath: { eq: "feedback-stars.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      feedback: file(relativePath: { eq: "feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    id === productIds.gt && (
      <div className={cn('products-item', className)}>
        {
          <div className="row">
            <Heading
                tag="h3"
                like={titleSize}
                className={cn('products-item__title', {
                  'products-item__title--badges-offset': isNeededBadgeOffset,
                })}
              >
               Unleash your car true potential 
              </Heading>
            <div className="col-lg py-lg-3 d-flex flex-column">
              
              <Link to={moreLink}>
                <Img
                  className="products-item__img-wrap"
                  fluid={productGT.childImageSharp.fluid}
                />
              </Link>
              <div
                className={cn('products-item__info-list', {
                  'mt-auto': withColumns,
                })}
              >
                {infoItems.map(({ title, descr }) => (
                  <div className="products-item__info">
                    <div className="products-item__info-title">
                      +{title}%<sup>*</sup>
                    </div>
                    <div className="products-item__info-descr">
                      <FormattedMessage id={descr} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="product-item__actions">
                <Button
                  onClick={addToCartClick}
                  className={`products-item__btn-add-to-cart page-btn`}
                  block
                >
                  <span>
                    <FormattedMessage id={addToBagBtnText} />
                    {` $${price}.00`}
                  </span>
                </Button>
                <div className="product-item__actions-link">
                  <Link href={'/products/monte-gt'}>learn more</Link>
                </div>
               
              </div>
            </div>

            <div className="col-lg py-lg-3 products-item__col-feedback">
            
                   <Feedback title="Feedback" >
                    <FeedbackRating
                      voteRatings={votes}
                      className="feedback__rating"
                    />
                    <Reviews reviews={reviews} className="feedback__reviews" />
                </Feedback>
            </div>
          </div>
        }
      </div>
    )
  )
}

export default ProductsItemStore
