import cn from 'classnames'
import React, { FC } from 'react'
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './ChipSlider.scss'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

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
 



  const isFewSlides = slides.length > 1

  const swiperParams: Swiper = {
    spaceBetween: 20,
    loop: isFewSlides,
    allowTouchMove: isFewSlides,
    effect: 'fade',
    ...restProps,
  }

  const renderSlides = slides.map(({ id, imgSrc }) => (
    <SwiperSlide key={id} data-id={id} className="chip-slider__slide">
      <GatsbyImage
                className="swiper-lazy"
                image={imgSrc}
                alt={` image`}
                />
      <div className="swiper-lazy-preloader" />
    </SwiperSlide>
  ))

  return (
    <div className={cn('chip-slider', className)}>
      <StaticImage
                className="chip-slider__img"
                src='../../../../assets/images/chip-screen.png'
                width={73}
                alt={` image`}
                />
      <Swiper className="chip-slider__slider" {...swiperParams}>
        {renderSlides}
      </Swiper>
    </div>
  )
}

export default ChipSlider
