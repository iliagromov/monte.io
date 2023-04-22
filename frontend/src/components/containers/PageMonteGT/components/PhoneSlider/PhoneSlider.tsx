import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper'

import './style.scss'

SwiperCore.use([Pagination, EffectFade, Autoplay])

export type PhoneSliderProps = Swiper & {
  slides: {
    id: string | number
    img: string
  }[]
  className?: string
}

export const PhoneSlider: FC<PhoneSliderProps> = ({
  slides,
  className,
  ...restProps
}) => {
  const { imgSmartphone, imgFringe } = useStaticQuery(graphql`
    query {
      imgSmartphone: file(relativePath: { eq: "smartphone.png" }) {
        childImageSharp {
          fluid(maxWidth: 558, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      imgFringe: file(relativePath: { eq: "fringe.png" }) {
        childImageSharp {
          fluid(maxWidth: 280, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const isFewSlides = slides.length > 1

  const swiperParams: Swiper = {
    spaceBetween: 20,
    loop: isFewSlides,
    allowTouchMove: isFewSlides,
    effect: 'fade',
    ...restProps,
  }

  const renderSlides = slides.map(({ id, img }) => (
    <SwiperSlide key={id} data-id={id} className="phone-slider__slide">
      <img className="" data-src={img} src={img} alt="" />
      {/* <div className="swiper-lazy-preloader" /> */}
    </SwiperSlide>
  ))

  return (
    <div className={cn('phone-slider', className)}>
      <Img
        className="phone-slider__top position-absolute"
        fluid={imgFringe.childImageSharp.fluid}
      />
      <Img
        className="phone-slider__img"
        fluid={imgSmartphone.childImageSharp.fluid}
      />
      <Swiper className="phone-slider__slider" {...swiperParams}>
        {renderSlides}
      </Swiper>
    </div>
  )
}
