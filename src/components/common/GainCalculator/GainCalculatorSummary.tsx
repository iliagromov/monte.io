import cn from 'classnames'
import Img from 'gatsby-image'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { CalculatorEngine } from '../../../api/implementation/calculatorEngines'
import { text } from '../../../data/disclaimer'
import { buttonAddToCart, buttonReadMore } from '../../../data/gain-calculator'
import { CART, MONTE_GTR } from '../../../data/routes'
import { Product } from '../../../types/product'
import { getCarPowerGain, getProductDataById } from '../../../utils'
import { Button, Footnote } from '../../ui'
import CalculcatorPerfomanceGain from '../PerformanceGain/CalculcatorPerformanceGain'
// @ts-ignore: не настроена работа с module.scss
import * as style from './GainCalculator.module.scss'
import { getPrice } from '../../../utils/getPrice'

type GainCalculatorSummaryProps = {
  onCloseModal: () => void
  productGTR: Product
  selectedCarEngine: CalculatorEngine
  onAddToCart: () => void
}

export const GainCalculatorSummary: React.FC<GainCalculatorSummaryProps> = ({
  onCloseModal,
  productGTR,
  selectedCarEngine,
  onAddToCart,
}) => {
  const productData = getPrice(productGTR.id)
  // TODO: add status for price loading/error
  const price = productData?.price || 0
  const rednerAddtoBagBtn = price ? (
    <Button
      onClick={() => {
        onAddToCart()
        onCloseModal()
      }}
      className={cn(style.buttonAddToCart, `products-item__btn-add-to-cart`)}
      block
    >
      <span>{`Shop now ${price}$`}</span>
    </Button>
  ) : (
    <Button
      disabled={true}
      className={cn(style.button, 'products-item__btn-disabled')}
      onClick={() => {
        onAddToCart()
        onCloseModal()
      }}
      href={CART}
    >
      <span>
        <span>{`Out of stock`}</span>
      </span>
    </Button>
  )

  return (
    <div className={style.calculatorSummaryWrapper}>
      <CalculcatorPerfomanceGain
        hp={selectedCarEngine.hp}
        nm={selectedCarEngine.nm}
        hpGain={getCarPowerGain({
          value: selectedCarEngine.hp,
          productId: productGTR.id,
          type: 'hp',
        })}
        nmGain={getCarPowerGain({
          value: selectedCarEngine.nm,
          productId: productGTR.id,
          type: 'nm',
        })}
      />

      <div className={cn(style.buttonsWrapper, 'mb-5')}>
        <Button
          className={cn(style.button)}
          type="ghost"
          onClick={() => {
            onCloseModal()
          }}
          href={MONTE_GTR}
        >
          <span>
            <FormattedMessage id={buttonReadMore} />
          </span>
        </Button>
        {rednerAddtoBagBtn}
      </div>

      <Footnote className="mb-5 mt-4 mt-lg-5 pt-lg-4 text-left">
        <FormattedMessage id={text} />
      </Footnote>
    </div>
  )
}
