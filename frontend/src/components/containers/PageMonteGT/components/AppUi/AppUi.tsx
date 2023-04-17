import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { PhoneSlider, PhoneSliderProps } from '../PhoneSlider'
import './style.scss'

type AppUiProps = {
  title: string
  text: string
  items: {
    id: string | number
    title: string
    text: string
  }[]
}

export const AppUi: FC<AppUiProps> = ({ title, text, items }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [slider, setSlider] = useState(null)

  const onTabClick = (index: number) => {
    slider.slideTo(index + 1)
  }
  const {
    appUiSlides1,
    appUiSlides2,
    appUiSlides3,
    appUiSlides4,
  } = useStaticQuery(graphql`
    query {
      appUiSlides1: file(relativePath: { eq: "app-ui-slides-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      appUiSlides2: file(relativePath: { eq: "app-ui-slides-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      appUiSlides3: file(relativePath: { eq: "app-ui-slides-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      appUiSlides4: file(relativePath: { eq: "app-ui-slides-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const slidesImages = [
    appUiSlides1.childImageSharp.fluid.src,
    appUiSlides2.childImageSharp.fluid.src,
    appUiSlides3.childImageSharp.fluid.src,
    appUiSlides4.childImageSharp.fluid.src,
  ]
  const slides = items.map(({ id }, i) => ({
    id,
    img: slidesImages[i],
  }))

  const isFewSlides = slides.length > 1
  const paginationId = 'pagination-bcvlkj'

  const phoneSliderOptions: PhoneSliderProps = {
    slides,
    pagination: isFewSlides
      ? {
          clickable: true,
          el: `#${paginationId}`,
          bulletClass: `app-ui__pagination-bullet`,
          bulletActiveClass: `app-ui__pagination-bullet--active`,
        }
      : false,

    onSwiper: swiper => {
      setSlider(swiper)
    },
    onSlideChange: swiper => {
      setActiveTab(swiper.realIndex)
    },
  }

  const renderPhone = (
    <div className="app-ui__phone">
      <PhoneSlider className="app-ui__phone-inner" {...phoneSliderOptions} />
      <div
        className="swiper-pagination app-ui__phone-pagination"
        id={paginationId}
      />
    </div>
  )

  const renderTabs = items.map(({ title, text, id }, i) => {
    const onClick = () => {
      onTabClick(i)
    }

    return (
      <div
        className={cn('app-ui__tab', {
          'app-ui__tab--active': activeTab === i,
        })}
        onClick={onClick}
        role="button"
        tabIndex={-1}
        key={id}
      >
        <div className="app-ui__tab-title">
          <FormattedMessage id={title} />
        </div>
        <p className="app-ui__tab-text">
          <FormattedMessage id={text} />
        </p>
      </div>
    )
  })

  return (
    <section className="app-ui section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h2 className="app-ui__title h1">
              <FormattedMessage id={title} />
            </h2>
            <p className="app-ui__text">
              <FormattedMessage id={text} />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 order-md-1">{renderPhone}</div>

          <div className="col-md-6">
            <div className="app-ui__tabs">{renderTabs}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
