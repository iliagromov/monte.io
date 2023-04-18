import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './style.scss'

SwiperCore.use([Pagination, EffectFade, Autoplay])

export type ChipSliderProps = Swiper & {
  slides: {
    id: string | number
    imgSrc: string
  }[]
  className?: string
}

export const ChipSlider: FC<ChipSliderProps> = ({
  slides,
  className,
  ...restProps
}) => {
  const { chipScreen } = useStaticQuery(graphql`
    query {
      chipScreen: file(relativePath: { eq: "chip-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 558, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
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
    preloadImages: false,
    lazy: true,
    effect: 'fade',
    ...restProps,
  }

  const renderSlides = slides.map(({ id, imgSrc }) => (
    <SwiperSlide key={id} data-id={id} className="chip-slider__slide">
      <img className="swiper-lazy" data-src={imgSrc} alt="" />
      <div className="swiper-lazy-preloader" />
    </SwiperSlide>
  ))

  return (
    <div className={cn('chip-slider', className)}>
      <Img
        className="chip-slider__img"
        fluid={chipScreen.childImageSharp.fluid}
      />
      <Swiper className="chip-slider__slider" {...swiperParams}>
        {renderSlides}
      </Swiper>
    </div>
  )
}

export default ChipSlider
