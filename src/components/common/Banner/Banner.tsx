import React, { FC } from 'react';
import { Link } from "gatsby";

import { Button } from '../../ui';

import {  StaticImage } from 'gatsby-plugin-image';


import './Banner.scss';
import { product } from '../../../data/page-gt';
import { useSelector } from 'react-redux';
import { products } from '../../../store';
import { getPrice } from '../../../utils/getPrice';

const BannerComponent: FC = () => {
 
  // function getPrice(productId){
  //   const productsData = useSelector(products.selectors.productsData)

  //   if (productsData?.length > 0) {
  //     return productsData.find(p => p.id === productId)
  //   } else {
  //     return 0
  //   }
  // } 
  

  
  const productData = getPrice(product.id);
  // TODO: add status for price loading/error
  const price = productData?.price || 0

  return (

    <div className="banner">
      <div className="banner__img-background">
        <StaticImage
          src="../../../assets/images/banner-main.png"
          alt="banner"
          transformOptions={
            { fit: "cover", cropFocus: "attention" }
          }
          style={{ width:"100%", height:"100%" }}
        />

      </div>
      <div className="banner-inner-block">
        <div className="container">
          <div className="banner-inner">
            <div className="banner__text">
              <h1 className="banner__title">
                Race to the top
                <span>with Monte Tuning</span>
              </h1>
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
                      {`buy now usd $${price}`}
                    </span>
                  </Button>
                </div>

                <div className="banner__action-mobile">
                  <Link className={`product-about__actions-link`} to={'/products/monte-gt'}>learn more</Link>
                </div>

              </div>
            </div>
            <div className="banner__img">
                <StaticImage
                    src="../../../assets/images/bannerGTChip.png"
                    className="page-img"
                    alt={'banner'}
                  />
            </div>
          </div>

        </div>
      </div>


    </div>

  );
}


export { BannerComponent };

