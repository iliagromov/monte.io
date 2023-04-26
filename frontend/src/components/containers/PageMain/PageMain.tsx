

const { productIds } = require('../../../types/product')
import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage, IntlShape } from 'react-intl'
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from 'gatsby-image'
import { News } from './components/News'

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

import './style.scss'
import FaqSection from '../../common/Faq';
import FaqList from '../../common/FaqList';
import { Section } from '../../ui';
import { Video } from '../../common/Video';


const PageMain: FC<PageMainProps> = () => {


  const {
    heroImgBg,
    installVideoPreview,
  } = useStaticQuery(graphql`
    query {
      
      heroImgBg: file(relativePath: { eq: "color-cloud.jpg" }) {
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
    }
  `)
  return (  
    <>
      <div className="page-main">
        <div className="banner">
          <div className="container">
              <div className="banner-inner">
                Banner
                <Img className="hero__img-background" fluid={heroImgBg.childImageSharp.fluid} />
              </div>
          </div>
        </div>

        <div className="product-about">
          <div className="container">
              <div className="product-about">
                <div className="product-about__text">
                    <h2>Monte GT</h2>
                    <p>The Monte GT comes with a complimentary smartphone app that provides drivers with access to a tuning database tailored to their vehicle's specifications, enabling them to experience optimized performance from the comfort of their driver's seat.</p>
                    <button className="page-btn">buy now usd 349.00</button>
                    <a href="">learn more</a>
                </div>
                <div className="product-about__img">

                </div>
              </div>
          </div>
        </div>

        <div className="advantages">
          <div className="container">
          advantages
          </div>
        </div>

        <div className="product-card-info">
          <div className="container">
          product-card-info
          </div>
        </div>

        <div className="review">
          <div className="container">
          review
          </div>
        </div>
        <div className="news-pereview">
          <div className="container">
            news pereview
          </div>
        </div>
        <News items={news.items} title={news.title} />

        <div className="featured">
          <div className="container">
          featured
          </div>
        </div>
        <div className="certificate-block">
          <div className="container">
          certificate-block
          </div>
        </div>
        <div className="frequently">
          <div className="container">
          frequently-inner
          </div>
        </div>
        <div className={cn('col-md-12', 'col-lg-12')}>
          <FaqSection title={faqSection.title} mod="pt-lg">
            <FaqList items={faqSection.items} />
          </FaqSection>
        </div>
        <div>
        </div>

      </div>

    </>
  )
}
export default PageMain;
