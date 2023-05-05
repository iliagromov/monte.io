import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'
import { Link } from 'gatsby'

type BannerProps = {
  title: string
  imgSourses: FluidObject[]
  btnText: string
  btnHref: string
  onClick?: () => void
}

export const Banner: FC<BannerProps> = ({
  title,
  imgSourses,
  btnText,
  btnHref,
  onClick,
}) => {
  return (
    <section className="section banner">
      <div className="container">
        <Img className="banner__img-background" fluid={imgSourses} />

        <h1 className="h2 banner__title mx-auto text-center">
          <FormattedMessage id={title} />
        </h1>
        <div className="performance__btn-wrap ">
          <Link to={'/'} className="banner__btn">
            <span>
              <FormattedMessage id={btnText} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
