// FIXME: слишком много нужно прокидываться через пропсы
import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  products,
  selectCarText,
  selectsTitle,
  thumbSubtitleCalculator,
  thumbTitle,
  thumbTitleCalculator,
} from '../../../data/gain-calculator'
import { product as productProps } from '../../../data/page-gt'
import { ProductIds } from '../../../types/product'
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import useStore from '../../containers/PageStore/useStore'
import { Button, Heading, notification } from '../../ui'
import CarSelects from '../CarSelects'
import Products from '../Products'
import ProductsItemStore from '../ProductsItem/ProductsItemStore'
// @ts-ignore: не настроена работа с module.scss
import style from './GainCalculator.module.scss'
import { GainCalculatorSummary } from './GainCalculatorSummary'
import { useGainCalculator } from './useGainCalculator'

type GainCalculatorProps = {
  onCloseModal?: () => void
  isStoreCalculator: boolean
}

export const GainCalculator: FC<GainCalculatorProps> = ({
  onCloseModal,
  isStoreCalculator,
}) => {
  const {
    isCarSelected,
    selectedCar,
    onSelectsSubmitClick,
    onNewCarClick,
    addToCart,
    isFirstSeleted,
    selectedCarEngine,
  } = isStoreCalculator ? useStore() : useGainCalculator()

  const { imgProductThumb } = useStaticQuery(graphql`
    query {
      imgProductThumb: file(relativePath: { eq: "store-product-yellow.png" }) {
        childImageSharp {
          fluid(maxWidth: 670, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const productsWithImages = getProductsWithImages(products)
  const productGTR = productsWithImages.find(p => p.id === ProductIds.gtr)

  const productGT = productsWithImages.find(pr => pr.id == ProductIds.gt)

  const addToCartClick = () => {
    addToCart(productGT.id)
    // todo: сделать через мидлвар
    notification.open({
      message: 'Added to cart.',
      description: 'Thanks!',
      duration: 2,
      top: 100,
    })
    // redirect to
    navigate('/cart/')
  }

  const renderCarSelects = (
    <CarSelects
      isCalculatorCar={!isStoreCalculator}
      className="mb-5"
      onSubmitClick={onSelectsSubmitClick}
    />
  )

  const renderProduct = (
    <Products>
      <ProductsItemStore
        {...productGT}
        moreLink={productGT.pageLink}
        featuresList={productGT.featuresList}
        key={productGT.title}
        addToCartClick={addToCartClick}
      />
    </Products>
  )

  const renderProductThumb = () => {
    if (isStoreCalculator) {
      return (
        <>
          <Heading tag="h1" like="h2" className="text-center mb-5">
            <FormattedMessage id={thumbTitle} />
          </Heading>

          {renderCarSelects}

          <div className="text-center pt-3 pt-md-5">
            <Img
              className={style['thumbImg']}
              fluid={imgProductThumb.childImageSharp.fluid}
            />
          </div>
        </>
      )
    }

    return (
      <>
        <Heading tag="h1" like="h3" className="text-center mb-2">
          <FormattedMessage id={thumbTitleCalculator} />
        </Heading>

        <Heading tag="h2" like="h5" className="text-center mb-5">
          <FormattedMessage id={thumbSubtitleCalculator} />
        </Heading>

        {renderCarSelects}
      </>
    )
  }

  const renderProductReady = () => {
    return (
      <div className="text-center">
        <Heading tag="h2" className="text-center mb-2 col-lg-8 px-0 mx-auto">
          Monte Tuning for: {selectedCar}
        </Heading>

        {isStoreCalculator ? (
          <div className="text-center mb-5">{renderCarSelects}</div>
        ) : (
          <div className="text-center mb-5">
            <Button type="link" onClick={onNewCarClick}>
              <FormattedMessage id={selectCarText} />
            </Button>
          </div>
        )}

        {isStoreCalculator ? (
          renderProduct
        ) : (
          <GainCalculatorSummary
            productGTR={productGT}
            selectedCarEngine={selectedCarEngine}
            onAddToCart={addToCartClick}
            onCloseModal={onCloseModal}
          />
        )}
      </div>
    )
  }

  const renderProductWithSelects = () => {
    return (
      <>
        <Heading tag="h1" like="h2" className="text-center mb-5">
          <FormattedMessage id={selectsTitle} />
        </Heading>

        {renderCarSelects}
      </>
    )
  }

  const renderBeforeSelected = isFirstSeleted
    ? renderProductWithSelects()
    : renderProductThumb()

  return isCarSelected ? renderProductReady() : renderBeforeSelected
}
