
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'
type TuningPromoProps = {
  heading: string
  text: string
}

export const TuningPromo: FC<TuningPromoProps> = ({
  heading,
  text,
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
            <StaticImage
             className="tuning-promo__image-container ml-n3 ml-md-0"
                src='../../../../../assets/images/tuning-promo-lg.png'
                alt={` image`}
                />
          </div>
        </div>
      </div>
    </section>
  )
}
