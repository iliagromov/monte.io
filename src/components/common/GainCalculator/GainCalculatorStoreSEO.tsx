// FIXME: слишком много нужно прокидываться через пропсы

import { navigate } from 'gatsby'
import React, { FC } from 'react'

import {
  products,
} from '../../../data/gain-calculator'
import { ProductIds } from '../../../types/product'
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import useStore from '../../containers/PageStore/useStore'
import { Button, Heading, notification } from '../../ui'
import CarSelects from '../CarSelects'
import Products from '../Products'
import ProductsItemStore from '../ProductsItem/ProductsItemStore'
// @ts-ignore: не настроена работа с module.scss
import * as style from './GainCalculator.module.scss'
import CarSelectsSEO from '../CarSelects/CarSelectsSEO'

type GainCalculatorProps = {
    pageData?: any
}

export const GainCalculatorStoreSEO: FC<GainCalculatorProps> = ({pageData}) => {

  const {
    onSelectsSubmitClick,
    addToCart,
  } = useStore() 

  const productsWithImages = getProductsWithImages(products)

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

  return  (
    <div className="text-center">
      <Heading tag="h1" className="text-center mb-2 col-lg-8 px-0 mx-auto">
        Monte Tuning for: {pageData.titleH1}
      </Heading>

      <div className="text-center mb-5"> 
        <CarSelectsSEO
        isSeo={true}
        seoData={pageData}
        isCalculatorCar={false}
        className="mb-5"
        onSubmitClick={onSelectsSubmitClick}
        />
      </div>

      <Products>
        <ProductsItemStore
            {...productGT}
            moreLink={productGT.pageLink}
            featuresList={productGT.featuresList}
            key={`product__${productGT.title}`}
            addToCartClick={addToCartClick}
        />
        </Products>
    </div>
  )
}
