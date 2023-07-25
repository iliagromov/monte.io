import React, { FC } from 'react';

import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql,  } from "gatsby";

import './BannerGT.scss';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../ui';
import { product } from '../../../data/page-gt';
import { getPrice } from '../../../utils/getPrice';

const BannerGTComponent: FC = () => {
    
  const productData = getPrice(product.id)
  // TODO: add status for price loading/error
  const price = productData?.price || 0

    const {
        starsLayout,
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
    
        // const renderAdvantages = productProps.advantages.map(({ icon, text }, i) => {
        //     const i18nText = intl.formatMessage({ id: text })
        //     return (
        //       <li
        //         className={`product-main__advantage col px-1 px-lg-2`}
        //         key={`id-${i}-${icon}`}
        //       >
        //         <Icon
        //           name={icon}
        //           className={cn(
        //             `product-main__advantage-icon`,
        //             `product-main__advantage-icon--${icon}`
        //           )}
        //         />
        //         <div
        //           className={`product-main__advantage-text`}
        //           dangerouslySetInnerHTML={{ __html: i18nText }}
        //         />
        //       </li>
        //     )
        //   })
    return (

        <div className="banner">
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
                  <StaticImage
                   className="page-img" 
                  src="../../../assets/images/bannerGTChip.png"
                  alt={` image`}
                  />
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
                          {`buy now usd $${price}`}
                        </span>
                      </Button>
                      
                      <div className="banner__action-description">
                        Only 10 left in stock. Order now. 
                      </div>
                    </div>
  
  
                  </div>
                </div>
              <div className="banner__img">
                  <StaticImage
                      className="page-img" 
                      src="../../../assets/images/bannerGTChip.png"
                      alt={` image`}
                      />
             
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}


export { BannerGTComponent };

