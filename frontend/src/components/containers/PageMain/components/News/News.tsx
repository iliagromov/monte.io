import { RightOutlined } from '@ant-design/icons'
import { Link } from 'gatsby'
import React, { ComponentProps, FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NewsItem, NewsItemProps } from '../NewsItem'
import './style.scss'

type SwiperProps = ComponentProps<typeof Swiper>

const blockName = 'news'

export type NewsProps = {
  items: NewsItemProps[]
  title: string
}

export const News: FC<NewsProps> = ({ items, title }) => {
  const swiperOptions: SwiperProps = {
    spaceBetween: 16,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
      992: {
        slidesPerView: 3,
      },
    },
    onSwiper: swiper => {
      // slides visibility bugfix
      setTimeout(() => {
        swiper.update()
      }, 500)
    },
    onSlideChange: swiper => {
      // slides visibility bugfix
      swiper.update()
    },
  }

  const renderSlides = items.map((newsItem, i) => (
    <SwiperSlide key={i} className={`${blockName}__slide`}>
      <NewsItem {...newsItem} />
    </SwiperSlide>
  ))

  return (
    <div className={`${blockName} section`}>
      <div className="container">
        <div className={`${blockName}__title text-center h3`}>
          <FormattedMessage id={title} />
        </div>

        <Swiper className={`${blockName}__slider`} {...swiperOptions}>
          {renderSlides}
        </Swiper>

        <div className={`${blockName}__link-wrap`}>
          <Link to="/news" className={`${blockName}__link-more`}>
            <FormattedMessage id="pageMain.readOther" />
            <RightOutlined className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
