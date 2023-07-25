import React, { FC } from 'react';

import {
    product,
} from '../../../data/page-gtr'

import './BannerGTR.scss';
import { FormattedMessage } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';

const BannerGTRComponent: FC = () => {

    return (
        <div className="banner">
        <div className="banner-inner-block">
          <div className="container">
            <div className="banner-inner">
            <div className="banner__text">
                  <div className="banner__title">
                  <FormattedMessage id={product.title} />
                  </div>
                  <div className="banner__description">
                  <FormattedMessage id={product.descr} />
                  </div>
  
  
                  <div className="banner__sub-description">
                  <h1 className="product-main__title"> out of stock</h1>
                  </div>
                  <div className="banner__text-img">
                  <StaticImage
                   className="page-img" 
                   src="../../../assets/images/two-chips.png"
                  alt={` image`}
                  />
                  </div>
               
                </div>
              <div className="banner__img">
                  <StaticImage
                      className="page-img" 
                      src="../../../assets/images/two-chips.png"
                      alt={` image`}
                      />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export { BannerGTRComponent };

