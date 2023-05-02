

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
import { ReactSVG } from 'react-svg';
import { Frequently } from './components/Frequently';


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
      bannerImgSm: file(relativePath: { eq: "banner-main-sm.png" }) {
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
      imgProductCardInfo1: file(relativePath: { eq: "imgProductCardInfo1.svg" }) {
          publicURL
          name
      }
      imgProductCardInfo2: file(relativePath: { eq: "imgProductCardInfo2.svg" }) {
          publicURL
          name
      }
      imgProductCardInfo3: file(relativePath: { eq: "imgProductCardInfo3.svg" }) {
          publicURL
          name
      }
      imgProductCardInfo4: file(relativePath: { eq: "imgProductCardInfo4.svg" }) {
          publicURL
          name
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
      ...bannerImgSm.childImageSharp.fluid,
      media: `(max-width: 1200px)`,
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

                  <div className="banner__action-desktop">
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

                  <div className="banner__action-mobile">
                    <Link className={`product-about__actions-link`} to={'/products/monte-gt'}>learn more</Link>
                  </div>
                  
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
              <h2 className="product-about__text-title">Monte GT</h2>
              
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
                <Link className={`product-about__actions-link`} to={'/products/monte-gt'}>learn more</Link>
              </div>


            </div>
            <div className="product-about__img">
            <h2 className="product-about__text-mobile"><span>Perfomance chip</span> via Smartphone app</h2>
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
                    <ReactSVG
                      src={imgProductCardInfo1.publicURL}
                    />
                  </div>
                </div>

                <div className="advantages-item__text">
                  Unlock full <span>potential of your car</span> 
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG className="page-icon" src={imgProductCardInfo2.publicURL} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Up to 20% <span>more power</span> 
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG className="page-icon" src={imgProductCardInfo3.publicURL} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Save up to 10% <span>on fuel</span>
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG className="page-icon" src={imgProductCardInfo4.publicURL} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Easy to install and with <span>lifetime warranty</span>
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

      <div className="review-block">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', 'h2 mb-4 mb-lg-4'
        )}>Featured review</h2>
        <div className="container">
          <div className="review-block-inner">
            <div className="review-block__img">
              <Img className="certificate-block__img-background" fluid={reviewPoster.childImageSharp.fluid} />
            </div>
            <div className="review-block__text">
              <h2>bensmith</h2>
              <p>
                Best value upgrade I’ve made for my car so far. My car feels alive!&. Best value upgrade I’ve made for my car so far. My car feels alive!
              </p>

            </div>
          </div>

        </div>
      </div>
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
                  <div className="featured__img-text">
                    Monte Tuning is a proud member of the SEMA
                  </div>
                <Img className="certificate-block__img-background" fluid={certificateCouncil.childImageSharp.fluid} />
                  <div className="featured__img-text">
                    Tested, Safe and Certified Tuning for your car
                  </div>
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

      <Frequently/>

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
