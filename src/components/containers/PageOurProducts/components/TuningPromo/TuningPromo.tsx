import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'

type TuningPromoProps = {
  heading: string
  text: string
  imgSourses: FluidObject[]
}

export const TuningPromo: FC<TuningPromoProps> = ({
  heading,
  text,
  imgSourses,
}) => {
  return (
    <section className="tuning-promo section section--pt-lg">
      <div className="container">
        <div className="tuning-promo__content-wrap row">
          <div className="col-md-5 pr-md-1 tuning-promo__content-col">
            <h2 className="tuning-promo__heading h2">
              <FormattedMessage id={heading} />
            </h2>
            <p className="tuning-promo__text h3 mb-0">
              <FormattedMessage id={text} />
            </p>
          </div>

          <div className="col-md-7">
            <Img
              className="tuning-promo__image-container ml-n3 ml-md-0"
              fluid={imgSourses}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
