import cn from 'classnames'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { ProductId, productsMap } from '../../../../../types/product'
import { Button, Icon, IconNamesType } from '../../../../ui'
import './style.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ReactSVG } from 'react-svg'

const blockName = 'product-main'

export type ProductMainProps = {
  id: ProductId
  btnText: string
  btnHref: string
  advantages: {
    icon: IconNamesType
    text: string
  }[]
  title: string
  descr: string
  images?: {
    name: string
    img: FluidObject
  }[]
  onClick?: () => void
  isBtn: boolean
}

export const ProductMain: FC<ProductMainProps> = ({
  images,
  title,
  descr,
  advantages,
  id,
  btnText,
  btnHref,
  onClick,
  isBtn,
}) => {
  const showbtn = isBtn
  const intl = useIntl()

  const {
    starsLayout,
    bannerGTChip,
    imgProductCardInfo1,
    imgProductCardInfo2,
    imgProductCardInfo3,
    imgProductCardInfo4,
  } = useStaticQuery(graphql`
    query {
      starsLayout: file(relativePath: { eq: "stars.svg" }) {
          publicURL
          name
      }
      bannerGTChip: file(relativePath: { eq: "bannerGTChip.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgProductCardInfo1: file(relativePath: { eq: "imgProductCardInfo2.svg" }) {
          publicURL
          name
      }
      imgProductCardInfo2: file(relativePath: { eq: "imgProductCardInfo3.svg" }) {
          publicURL
          name
      }
      imgProductCardInfo3: file(relativePath: { eq: "imgProductCardInfo5.svg" }) {
          publicURL
          name
      }
      imgProductCardInfo4: file(relativePath: { eq: "imgProductCardInfo4.svg" }) {
          publicURL
          name
      }

      }`
    );

  const renderAdvantages = advantages.map(({ icon, text }, i) => {
    const i18nText = intl.formatMessage({ id: text })
    return (
      <li
        className={`${blockName}__advantage col px-1 px-lg-2`}
        key={`id-${i}-${icon}`}
      >
        <Icon
          name={icon}
          className={cn(
            `${blockName}__advantage-icon`,
            `${blockName}__advantage-icon--${icon}`
          )}
        />
        <div
          className={`${blockName}__advantage-text`}
          dangerouslySetInnerHTML={{ __html: i18nText }}
        />
      </li>
    )
  })

  const renderImages = images?.map(({ img, name }) => (
    <div className="banner__img">
      <Img
        className="page-img"
        fluid={img}
        key={name}
      />    
    </div>
    
  ))

  const renderContent = (
    <>
      <h1 className={`${blockName}__title`}>
        <FormattedMessage id={title} />
      </h1>
      <div className={`${blockName}__descr`}>
        <FormattedMessage id={descr} />
      </div>
      <div className={`${blockName}__stars`}>
          <div className="stars-raiting">
            <ReactSVG className="stars-raiting__img" src={starsLayout.publicURL} />
            4.9
          </div>
          
          <div className={`${blockName}__stars-text`}>
            98% of the customers give this item 5 stars.
          </div>
      </div>
      

      <div className={`${blockName}__advantages`}>
        <ul className={`${blockName}__advantages-list row mx-n1 mx-lg-n2`}>
          {renderAdvantages}
        </ul>
      </div>
      <div className={`${blockName}__btn-wrap`}>
          <Button
            onClick={onClick}
            className={`${blockName}__btn`}
            href={btnHref}
            block
          >
            <span>
              SHOP NOW USD $349
            </span>
          </Button>
          <div className={`${blockName}__btn-sub-text`}>
          Only 10 left in stock. Order now. 
          </div>
         
        
      </div>
    </>
  )

  

  return (
    <div className="banner">
      <div className="banner__img-background">
        
      </div>
      <div className="banner-inner-block">
        <div className="container">
          <div className="banner-inner">
          <div className="banner__text">
                <div className="banner__title">
                  Introducing Monte GT
                </div>
                <div className="banner__description">
                  Customise your tunning with IOS/Android app
                </div>

                <div className="banner__stars">
                  <div className="stars">
                    <div className="stars__icons">
                    <ReactSVG src={starsLayout.publicURL} />
                    </div>
                    <div className="stars__count">
                        4.9
                    </div>
                  </div>
                 
                </div>

                <div className="banner__sub-description">
                  98% of the customers give this item 5 stars.
                </div>
                <div className="banner__text-img">
                <Img className="page-img" fluid={bannerGTChip.childImageSharp.fluid} />
                </div>
                <div className="banner__advantages">
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
                      10-20% more power and torque*
                      </div>
                    </div>
                    <div className="advantages-item">
                      <div className="advantages-item__icon-bg">
                        <div className="advantages-item__icon">
                          <ReactSVG className="page-icon" src={imgProductCardInfo2.publicURL} />
                        </div>

                      </div>
                      <div className="advantages-item__text">
                      5-10% more fuel savings*
                      </div>
                    </div>
                    <div className="advantages-item">
                      <div className="advantages-item__icon-bg">
                        <div className="advantages-item__icon">
                          <ReactSVG className="page-icon" src={imgProductCardInfo3.publicURL} />
                        </div>

                      </div>
                      <div className="advantages-item__text">
                      OBDII plug & play installlation
                      </div>
                    </div>
                    <div className="advantages-item">
                      <div className="advantages-item__icon-bg">
                        <div className="advantages-item__icon">
                          <ReactSVG className="page-icon" src={imgProductCardInfo4.publicURL} />
                        </div>

                      </div>
                      <div className="advantages-item__text">
                      IOS / Android mobile apps
                      </div>
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
                    
                    <div className="banner__action-description">
                      Only 10 left in stock. Order now. 
                    </div>
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
  )
}

export default ProductMain
