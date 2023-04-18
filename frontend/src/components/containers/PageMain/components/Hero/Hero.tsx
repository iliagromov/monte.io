import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import './style.scss'

type HeroProps = {
  title: string
  imgOne: FluidObject | FluidObject[]
  imgTwo: FluidObject | FluidObject[]
}

export const Hero: FC<HeroProps> = ({ children, title, imgOne, imgTwo }) => {
  return (
    <section className="section section--under-header hero">
      <Img className="hero__img-background" fluid={imgOne} />
      <Img className="hero__img-product" fluid={imgTwo} />
      <div className="container">
        <h1 className="h2 hero__title mx-auto text-center">
          <FormattedMessage id={title} />
        </h1>
        {children}
      </div>
    </section>
  )
}
