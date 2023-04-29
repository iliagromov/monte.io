

const { productIds } = require('../../../types/product')
import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage, IntlShape } from 'react-intl'
import { useStaticQuery, graphql, Link } from "gatsby";
import Img, { FluidObject } from 'gatsby-image'
import { News } from './components/News'
import { Advantages } from './components/Advantages'

// data
import {
  advantages,
  edge,
  faqSection,
  hero,
  news,
  products,
  programmer as programmerProps,
  installVideo,
} from '../../../data/page-main'

type PageMainProps = {
  intl: IntlShape

}

import { Hero } from './components/Hero'

import './style.scss'
import FaqSection from '../../common/Faq';
import FaqList from '../../common/FaqList';
import { Button, Icon, Section } from '../../ui';
import { Video } from '../../common/Video';
import { StaticImage } from 'gatsby-plugin-image';
import Products from './components/Products';
import ProductsItem from './components/ProductsItem';
// hooks
import { useCart } from '../../../hooks/useCart'
// utils
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import ProductMain from './components/ProductMain';

import {
  product as productProps,
} from '../../../data/page-gt'


const PageMain: FC<PageMainProps> = () => {


  const {
    productMain1,
    heroImgBg,
    heroImgProduct,
    bannerImg,
    bannerImgSm,
    bannerImgXs,
    bannerGTChip,
    productAboutDesktop,
    productAboutMobile,
    imgProductCardInfo1,
    imgProductCardInfo2,
    imgProductCardInfo3,
    imgProductCardInfo4,
    imgFrequently1,
    imgFrequently2,
    imgFrequently3,
    imgFrequently4,
    certificates,
    certificateCouncil,
    featuredLogos,
    reviewPoster,
    installVideoPreview,
  } = useStaticQuery(graphql`
    query {
      productMain1: file(relativePath: { eq: "product-main-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 577, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bannerImg: file(relativePath: { eq: "banner-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bannerImgXs: file(relativePath: { eq: "banner-main-xs.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      bannerImgSm: file(relativePath: { eq: "banner-main-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bannerGTChip: file(relativePath: { eq: "bannerGTChip.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      productAboutDesktop: file(relativePath: { eq: "product-about-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      productAboutMobile: file(relativePath: { eq: "product-about-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgProductCardInfo1: file(relativePath: { eq: "img-product-card-info-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgProductCardInfo2: file(relativePath: { eq: "img-product-card-info-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgProductCardInfo3: file(relativePath: { eq: "img-product-card-info-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgProductCardInfo4: file(relativePath: { eq: "img-product-card-info-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      productGT: file(relativePath: { eq: "product-GT.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      certificates: file(relativePath: { eq: "certificates.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      certificateCouncil: file(relativePath: { eq: "certificate-сouncil.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      featuredLogos: file(relativePath: { eq: "featured-logos.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      reviewPoster: file(relativePath: { eq: "review-poster.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgFrequently1: file(relativePath: { eq: "img-frequently-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgFrequently2: file(relativePath: { eq: "img-frequently-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgFrequently3: file(relativePath: { eq: "img-frequently-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgFrequently4: file(relativePath: { eq: "img-frequently-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      installVideoPreview: file(
        relativePath: { eq: "installVideoPreview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1040, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroImgBg: file(relativePath: { eq: "color-cloud.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      heroImgProduct: file(relativePath: { eq: "hero-gt-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 659, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

    }
  `)
  let sourses: FluidObject[] = [
    {
      ...bannerImgXs.childImageSharp.fluid,
      media: `(max-width: 767px)`,
    },
    {
      ...bannerImg.childImageSharp.fluid,
    },
  ]

  const { addToCart } = useCart()
  const productsWithImages = getProductsWithImages(products)
  const productGT = productsWithImages.find((pr: any) => pr.id == productIds.gt)

  const productImages = [
    {
      img: productMain1.childImageSharp.fluid,
      name: 'gt-phone',
    },
  ]

  return (

    <main className="page-main">
      <div className="banner">
        <div className="banner__img-background">
          <Img className="page-img" fluid={sourses} />
        </div>
        <div className="banner-inner-block">
          <div className="container">
            <div className="banner-inner">
              <div className="banner__text">
                <div className="banner__title">
                  Race to the top
                  <span>with Monte Tuning</span>
                </div>
                <div className="banner__description">
                  PERFORMANCE TUNER WITH SMARTPHONE APP
                </div>
                <div className="banner__power">
                  <div className="banner-power-item">
                    <div className="banner-power-item__title">
                      up to 20%
                    </div>
                    <div className="banner-power-item__text">
                      More Power
                    </div>
                  </div>
                  <div className="banner-power-item">
                    <div className="banner-power-item__title">
                      up to 10%
                    </div>
                    <div className="banner-power-item__text">
                      Fuel saving
                    </div>
                  </div>
                </div>
                <div className="banner__action">
                  <Button
                    className={`page-btn`}
                    href={'/store'}
                    block
                  >
                    <span>
                      buy now usd $349.00
                    </span>
                  </Button>
                </div>
              </div>
              <div className="banner__img">
                <Img className="page-img" fluid={bannerGTChip.childImageSharp.fluid} />
              </div>
            </div>

          </div>
        </div>


      </div>
      {/* <ProductMain
          isBtn={true}
          images={productImages}
          {...(productProps as any)}
        /> */}
      {/* <Advantages
            items={advantages.items as any}
            titleText={advantages.titleText}
            titleClassName="h3"
          /> */}
      <div className="product-about">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', 'text-md-left h2 mb-4 mb-lg-4'
        )}>Engine Tuning via Smartphone </h2>
        <div className="container">
          <div className="product-about-inner">
            <div className="product-about__text">
              <h2>Monte GT</h2>
              <p>The Monte GT comes with a complimentary smartphone app that provides drivers with access to a tuning database tailored to their vehicle's specifications, enabling them to experience optimized performance from the comfort of their driver's seat.</p>
              <div className="product-about__actions">
                <Button
                  className={`page-btn`}
                  href={'/store'}
                  block
                >
                  <span>
                    buy now usd $349.00
                  </span>
                </Button>
                <Link href={'/products/monte-gt'}>learn more</Link>
              </div>


            </div>
            <div className="product-about__img">
              <Img className="page-img page-img_mob" fluid={productAboutMobile.childImageSharp.fluid} />
              <Img className="page-img page-img_desc" fluid={productAboutDesktop.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>

      <div className="advantages">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', ' h2 mb-4 mb-lg-4'
        )}>The ultimate upgrade for any performance enthusiast.</h2>
        <div className="container">
          <div className="advantages-inner">
            <div className="advantages-items">
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <Img
                      fluid={imgProductCardInfo1.childImageSharp.fluid}
                    />
                  </div>
                </div>

                <div className="advantages-item__text">
                  Unlock full <br /> potential of your car
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <Img className="page-icon" fluid={imgProductCardInfo2.childImageSharp.fluid} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Up to 20% <br /> more power
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <Img className="page-icon" fluid={imgProductCardInfo3.childImageSharp.fluid} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Save up to 10% <br /> on fuel
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <Img className="page-icon" fluid={imgProductCardInfo4.childImageSharp.fluid} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Easy to install and with <br /> lifetime warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-card-info">
        <div className="container">
          <div className="product-card-info-inner">

          </div>
        </div>
      </div>
      <Products>
        <ProductsItem
          {...productGT}
          moreLink={productGT.pageLink}
          featuresList={undefined}
          key={productGT.title}
          addToCartClick={() => addToCart(productGT.id)}

        />
      </Products>

      <div className="review">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', 'h2 mb-4 mb-lg-4'
        )}>Featured review</h2>
        <div className="container">
          <div className="review-inner">
            <div className="review__img">
              <Img className="certificate-block__img-background" fluid={reviewPoster.childImageSharp.fluid} />
            </div>
            <div className="review__text">
              <h2>bensmith</h2>
              <p>
                Best value upgrade I’ve made for my car so far. My car feels alive!&. Best value upgrade I’ve made for my car so far. My car feels alive!
              </p>

            </div>
          </div>

        </div>
      </div>
      {/* <div className="news-pereview">
          <div className="container">
            news pereview
          </div>
        </div> */}
      <News items={news.items} title={'Over 100k Customers Worldwide. Join Monte community now'} />

      <div className="featured">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', 'h2 mb-4 mb-lg-4'
        )}>Featured in </h2>
        <div className="container">
          <div className="featured-inner">
            <div className="featured__partners-row">
              <Img className="certificate-block__img-background" fluid={featuredLogos.childImageSharp.fluid} />
            </div>
            <div className="featured__text-container">
              <div className="featured__text">
                Monte Tuning is a proud member of the SEMA
                <br />
                ( Specialty Equipment Market Association )
              </div>
              <div className="featured__img">
                <Img className="certificate-block__img-background" fluid={certificateCouncil.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate-block">
        <h2
          className={cn(
            'faq__title', 'text-lg-center h1 mb-4 mb-lg-5', 'faq__title--small text-md-left h2 mb-4 mb-lg-4'
          )}
        >
          Tested, Safe and Certified Tuning for your car
        </h2>
        <div className="container">
          <div className="certificate-block-inner">
            <Img className="certificate-block__img-background" fluid={certificates.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div className="frequently">
        <h2
          className={cn(
            'faq__title', 'text-lg-center h1 mb-4 mb-lg-5', 'faq__title--small text-md-left h2 mb-4 mb-lg-4'
          )}
        >
          Frequently asked questions
        </h2>
        <div className="container">
          <div className="frequently-inner">
            <div className="frequently-items">
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <Img className="certificate-block__img-background" fluid={imgFrequently1.childImageSharp.fluid} />
                </div>
                <div className="frequently-item__text">
                  Plug and play installation
                </div>
                <div className="frequently-item__description">
                  No special automotive knowledge needed. Monte takes less than 5 minutes to be installed.
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <Img className="certificate-block__img-background" fluid={imgFrequently2.childImageSharp.fluid} />
                </div>
                <div className="frequently-item__text">
                  Versatility
                </div>
                <div className="frequently-item__description">
                  compatibility with a wide range of vehicles, including trucks and cars produced after 1996
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <Img className="certificate-block__img-background" fluid={imgFrequently3.childImageSharp.fluid} />
                </div>
                <div className="frequently-item__text">
                  Engineered in USA
                </div>
                <div className="frequently-item__description">
                  Designed and engineered in the USA  a high-quality product that is built to last.
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <Img className="certificate-block__img-background" fluid={imgFrequently4.childImageSharp.fluid} />
                </div>
                <div className="frequently-item__text">
                  Lifetime warranty
                </div>
                <div className="frequently-item__description">
                  backed by a lifetime warranty against defects, providing peace of mind
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn('col-md-12', 'col-lg-12')}>
        <FaqSection title={faqSection.title} mod="pt-lg">
          <FaqList items={faqSection.items} />
        </FaqSection>
      </div>
      <div>
      </div>

    </main>

  )
}
export default PageMain;
