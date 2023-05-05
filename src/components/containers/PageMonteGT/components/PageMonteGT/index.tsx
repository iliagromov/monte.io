import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, ComponentProps } from 'react'
import {
  appButtons as appButtonsProps,
  appUi as appUiProps,
  odds as oddsProps,
  performance as performanceProps,
  performanceCharts,
  product as productProps,
  productCard as productCardProps,
  reviews,
  techSpecs as techSpecsProps,
  votes,
  faqSection,
  gallaryCard,
  slider,
} from '../../../data/page-gt'
import { items as productsMenu } from '../../../data/products-menu'
import { useCart } from '../../../hooks/useCart'
import AddMenu from '../../common/AddMenu'
import Odds from '../../common/Odds'
import Performance from '../../common/Performance'
import ProductCard from '../../common/ProductCard'
import ProductMain from '../../common/ProductMain'
import TechSpecs from '../../common/TechSpecs'
import { Footnote, notification } from '../../ui'
import { AppButtons } from './components/AppButtons'
import { AppUi } from './components/AppUi'
import Feedback from './components/Feedback/Feedback'
import FeedbackRating from './components/FeedbackRating'
import { GTCharts } from './components/GTCharts'
import { Reviews } from './components/Reviews'

import FaqSection from '../../common/Faq'
import FaqList from '../../common/FaqList'
// @ts-ignore
import * as styles from './PageMonteGT.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

import { Button, Img, ImgProps } from '../../../../ui'

type SwiperProps = ComponentProps<typeof Swiper>

SwiperCore.use([Pagination, Navigation])

type PageMonteGTProps = {}

const PageMonteGT: FC<PageMonteGTProps> = () => {
  const { addToCart } = useCart()
  const {
    productMain1,
    productMain2,
    performanceCar,
    englishPdf,
    spanishPdf,
  } = useStaticQuery(graphql`
    query {
      productMain1: file(relativePath: { eq: "product-main-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      productMain2: file(relativePath: { eq: "product-main-02.png" }) {
        childImageSharp {
          fluid(maxWidth: 362, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      performanceCar: file(relativePath: { eq: "Mercedes-AMG-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1170, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      englishPdf: file(relativePath: { eq: "english.pdf" }) {
        publicURL
        name
      }
      spanishPdf: file(relativePath: { eq: "spanish-2.pdf" }) {
        publicURL
        name
      }
    }
  `)

  const productImages = [
    {
      img: productMain1.childImageSharp.fluid,
      name: 'gt-phone',
    },
    {
      img: productMain2.childImageSharp.fluid,
      name: 'gt-chip',
    },
  ]

  const onClick = () => {
    addToCart(productProps.id)
    // todo: сделать через мидлвар
    notification.open({
      message: 'Added to cart.',
      description: 'Thanks!',
      duration: 2,
      top: 100,
    })
  }

  const swiperParams: SwiperProps = {
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.product-card__slider_next',
      prevEl: '.product-card__slider_prev',
    },
  }

  return (
    <>
      <AddMenu items={productsMenu as any} mod="absolute" />
      <ProductMain
        isBtn={true}
        images={productImages}
        {...(productProps as any)}
      />
      <AppUi {...appUiProps} />
      <Performance
        img={performanceCar.childImageSharp.fluid}
        {...performanceProps}
      />
      <section className={cn('section', styles.sectionSlider)}>
        <div className="container">
          <div className="row">
            <div className={cn('col-md-12')}>
              <h2 className="app-ui__title-slider h3 text-lg-center">
                Easy to install in less than 5 minutes
              </h2>
              <Swiper
                className="product-card__slider product-card__slider-gt"
                {...swiperParams}
              >
                {slider.images.map(({ src, srcset }, i) => (
                  <SwiperSlide
                    key={`desktop_${i}`}
                    className="product-card__slide product-card__slide_desctop"
                  >
                    <div className="product-card__slide-container">
                      <img src={srcset.desktop} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
                {slider.images.map(({ src, srcset }, i) => (
                  <SwiperSlide
                    key={`mobile_${i}`}
                    className="product-card__slide product-card__slide_mobile"
                  >
                    <div className="product-card__slide-container">
                      <img src={srcset.mobile} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={cn('col-lg-6', styles.advantages)}>
              <Odds {...(oddsProps as any)} />
            </div>
            <div
              className={cn(
                'col-md-6',
                'col-xl-5',
                'ml-xl-auto',
                'pl-xl-0',
                'd-flex'
              )}
            >
              <ProductCard
                isBtn={true}
                footerContent={<AppButtons {...appButtonsProps} />}
                onBtnClick={onClick}
                images={productCardProps.images}
                imgRatio="4x3"
                contactsLink={productCardProps.contactsLink}
              />
            </div>
            <div className={cn('col-md-12', 'col-lg-12', styles.specs)}>
              <TechSpecs asTableUp="md" {...techSpecsProps} />
            </div>

            <div className={cn('col-md-12', 'col-lg-12')}>
              <FaqSection title={faqSection.title} mod="pt-lg">
                <FaqList items={faqSection.items} />
              </FaqSection>
            </div>
          </div>
        </div>
      </section>

      <Footnote withContainer>
        **Real world gains may be less or more depending on a large number of
        contributing factors. Please note for the full adjustment it is
        necessary to drive 120 miles after each mode change. You can learn more
        about the adjustment in the Support Section.
      </Footnote>
    </>
  )
}

export default PageMonteGT
