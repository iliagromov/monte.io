import React, { FC } from 'react';
import cn from 'classnames'

import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../ui';


import './ProductAbout.scss';
import { Link } from 'gatsby';
import { product } from '../../../data/page-gt';
import { getPrice } from '../../../utils/getPrice';

const ProductAboutComponent: FC = () => {
  
    const productData = getPrice(product.id)
    // TODO: add status for price loading/error
    const price = productData?.price || 0
    return (

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
                                {`buy now usd $${price}`}
                                </span>
                            </Button>
                            <Link className={`product-about__actions-link`} to={'/products/monte-gt'}>learn more</Link>
                        </div>


                    </div>
                    <div className="product-about__img">
                        <h2 className="product-about__text-mobile"><span>Performance chip</span> via Smartphone app</h2>
                        <StaticImage
                             className="page-img page-img_mob"
                             src="../../../assets/images/product-about-mobile.png"
                           
                            alt={'banner'}
                            />
                        <StaticImage
                            className="page-img page-img_desc"
                            src="../../../assets/images/product-about-desktop.png"
                           
                            alt={'banner'}
                            />
                    </div>
                </div>
            </div>
        </div>

    );
}


export { ProductAboutComponent };

