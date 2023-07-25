import React, { FC } from 'react';
import cn from 'classnames'
// import { ReactSVG } from 'react-svg';
import { Link } from "gatsby";

import { Button, Heading, HeadingProps } from '../../../ui';

import { StaticImage } from 'gatsby-plugin-image';
import { ProductId } from '../../../../types/product';



import './ProductsItemGT.scss';
import { getProductDataById } from '../../../../utils/getProductDataById';
import { FormattedMessage } from 'react-intl';
import { FeedbackComponent } from '../../Feedback/Feedback';
import { getPrice } from '../../../../utils/getPrice';


type FeatureItem = {
    id: string
    text: string
    
  }

export type ProductsItemProps = {
    id: ProductId
    power: string | number
    fuelSaving: string | number
    addToCartClick: () => void
}

  
const ProductsItemGT: FC<ProductsItemProps> = ({
    id,
    power,
    fuelSaving,
    addToCartClick,
}) => {


    const productData = getPrice(id)
    const price = productData?.price || 0
    
    const infoItems = [
        {
          title: power,
          descr: 'pageMain.productPower',
        },
        {
          title: fuelSaving,
          descr: 'pageMain.productFuelSaving',
        },
      ]

    return (

        <div className={cn('products-item')}>
        {
          <div className="row">
            <Heading
                tag="h3"
                className={cn('products-item__title', )}
              >
               Unleash your car true potential 
              </Heading>
            <div className="col-lg py-lg-3 d-flex flex-column">
              
              <Link to={'/products/monte-gt'}>
                
                 <StaticImage
                    className="products-item__img-wrap"
                    src='../../../../assets/images/product-GT.png'
                    alt={` image`}
                    />
              </Link>
              <div
                className={cn('products-item__info-list')}
              >
                {infoItems.map(({ title, descr }, i: number) => (
                  <div className="products-item__info" key={`products-item__${i}`}>
                    <div className="products-item__info-title">
                      +{title}%<sup>*</sup>
                    </div>
                    <div className="products-item__info-descr">
                        <FormattedMessage id={descr} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="product-item__actions">
                <Button
                  onClick={addToCartClick}
                  className={`products-item__btn-add-to-cart page-btn`}
                  block
                >
                  <span>
                    ADD TO BAG FOR
                    {` $${price}.00`}
                  </span>
                </Button>
                <div className="product-item__actions-link">
                  <Link to={'/products/monte-gt'}>learn more</Link>
                </div>
               
              </div>
            </div>

            <div className="col-lg py-lg-3 products-item__col-feedback">
                <FeedbackComponent/>
                
            </div>
          </div>
        }
      </div>

    );
}


export { ProductsItemGT };

