import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { PhoneSlider, PhoneSliderProps } from '../PhoneSlider'
import './style.scss'

import Img, { FluidObject } from 'gatsby-image'

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
    appUiMercedes,
    mode,
    vehicle,
    Bluetooth,
    speed
  } = useStaticQuery(graphql`
    query {
      appUiMercedes: file(relativePath: { eq: "app-ui-Mercedes-with-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 777, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      mode: file(relativePath: { eq: "mode.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      vehicle: file(relativePath: { eq: "vehicle.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      Bluetooth: file(relativePath: { eq: "Bluetooth.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      

      speed: file(relativePath: { eq: "speed.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
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
  // const slidesImages = [
  //   appUiSlides1.childImageSharp.fluid.src,
  //   appUiSlides2.childImageSharp.fluid.src,
  //   appUiSlides3.childImageSharp.fluid.src,
  //   appUiSlides4.childImageSharp.fluid.src,
  // ]
  // const slides = items.map(({ id }, i) => ({
  //   id,
  //   img: slidesImages[i],
  // }))

  // const isFewSlides = slides.length > 1
  // const paginationId = 'pagination-bcvlkj'

  // const phoneSliderOptions: PhoneSliderProps = {
  //   slides,
  //   pagination: isFewSlides
  //     ? {
  //       clickable: true,
  //       el: `#${paginationId}`,
  //       bulletClass: `app-ui__pagination-bullet`,
  //       bulletActiveClass: `app-ui__pagination-bullet--active`,
  //     }
  //     : false,

  //   onSwiper: swiper => {
  //     setSlider(swiper)
  //   },
  //   onSlideChange: swiper => {
  //     setActiveTab(swiper.realIndex)
  //   },
  // }

  // const renderPhone = (
  //   <div className="app-ui__phone">
  //     <PhoneSlider className="app-ui__phone-inner" {...phoneSliderOptions} />
  //     <div
  //       className="swiper-pagination app-ui__phone-pagination"
  //       id={paginationId}
  //     />
  //   </div>
  // )

  // const renderTabs = items.map(({ title, text, id }, i) => {
  //   const onClick = () => {
  //     onTabClick(i)
  //   }

  //   return (
  //     <div
  //       className={cn('app-ui__tab', {
  //         'app-ui__tab--active': activeTab === i,
  //       })}
  //       onClick={onClick}
  //       role="button"
  //       tabIndex={-1}
  //       key={id}
  //     >
  //       <div className="app-ui__tab-title">
  //         <FormattedMessage id={title} />
  //       </div>
  //       <p className="app-ui__tab-text">
  //         <FormattedMessage id={text} />
  //       </p>
  //     </div>
  //   )
  // })

  return (
    <section className="app-ui section">
      <div className="container">
        <div className="row">
          <div className="app-ui__text">
            <h2 className="app-ui__title h1">
              Everything you need from <br />the chip-tuning
            </h2>
          </div>
          <div className="app-ui__img">
            <div className="app-ui-img">
              <Img className="app-ui-img__car" fluid={appUiMercedes.childImageSharp.fluid} />

            </div>
          </div>
        </div>

          <div className="everything-description">
            <div className="everything-description__item">
                <Img className="description-item__screen" fluid={mode.childImageSharp.fluid} alt="mode"/>
                <div className="description-item__title">Switch between modes</div>
                <div className="description-item__text">Control your car performance right from the smartphone, Drive faster or save fuel with a push of the button.</div>
            </div>
            <div className="everything-description__item">
                <Img className="description-item__screen" fluid={vehicle.childImageSharp.fluid} alt="vehicle"/>
                <div className="description-item__title">Unlimited vehicle change</div>
                <div className="description-item__text">Upload your vehicle specific tune from our cloud based database of our 9000 vehicles right from your smartphone.</div>
                </div>
              <div className="everything-description__item">
                <Img className="description-item__screen" fluid={speed.childImageSharp.fluid} alt="speed"/>
                
              <div className="description-item__title">Watch speed in real time</div>
              <div className="description-item__text">Turn your phone into speedometer to accurately project your current speed.</div>
              </div>
              <div className="everything-description__item">
                  <Img className="description-item__screen" fluid={Bluetooth.childImageSharp.fluid} alt="Bluetooth"/>
                  <div className="description-item__title">Easy pairing with Bluetooth </div>
                  <div className="description-item__text">Control your car performance right from the smartphone, Drive faster or save fuel with a push of the button.</div>
              </div>
            </div>
      </div>
    </section>
  )
}
