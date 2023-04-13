import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { FormattedMessage } from 'react-intl'
import PerformanceGain, { PerformanceGainProps } from '../PerformanceGain'
import { Button } from '../../ui'
import { GainCalculatorModal } from '../../../layouts/Default/components/GainCalculatorModal'
import { useGainCalculatorModal } from '../../../layouts/Default/components/HeaderNav/useGainCalculatorModal'
import './style.scss'

type PerformanceProps = PerformanceGainProps & {
  img: FluidObject | FluidObject[]
  model: string
  title: string
  btnText: string
  btnHref: string
}

const Performance: FC<PerformanceProps> = ({
  img,
  model,
  title,
  btnText,
  btnHref,
  ...restProps
}) => {
  const { isModalShowed, openModal, closeModal } = useGainCalculatorModal()
  const renderBtn = (
    <FormattedMessage id={btnText}>
      {formattedBtnText => (
        <Button block onClick={openModal}>
          {formattedBtnText}
        </Button>
      )}
    </FormattedMessage>
  )

  return (
    <section className="performance section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-8 mb-5 mb-md-0">
            <div className="performance__model">{model}</div>
            <h2 className="performance__title h1">
              <FormattedMessage id={title} />
            </h2>
            <div className="performance__gain-wrap">
              <PerformanceGain {...restProps} />
              <div className="performance__btn-wrap">{renderBtn}</div>
              <GainCalculatorModal
                isModalShowed={isModalShowed}
                onCloseModal={closeModal}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 align-self-end">
            <Img className="performance__img-wrap" fluid={img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance
