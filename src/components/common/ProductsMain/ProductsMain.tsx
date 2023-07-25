import React, { FC } from 'react';
const { productIds } = require('../../../types/product')
// data
import {
    products,
} from '../../../data/page-main'

import cn from 'classnames'// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";
// hooks
import { useCart } from '../../../hooks/useCart'
// utils
import { getProductsWithImages } from '../../../utils/getProductsWithImages'

import { navigate } from "gatsby";
import { notification } from '../../ui';
import './ProductsMain.scss';
import { ProductsItemGT } from './ProductsItemGT/ProductsItemGT';

const ProductsMainComponent: FC = () => {
    //   const { 
    //     mainSlogan
    //   } = useStaticQuery(graphql`
    //     query  {
    //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
    //           publicURL
    //           name
    //       }
    //     }`);


    const { addToCart } = useCart()
    const addToCartClick = () => {
        addToCart(productGT.id)
        // todo: сделать через мидлвар
        notification.open({
            message: 'Added to cart.',
            description: 'Thanks!',
            duration: 2,
            top: 100,
        })
        // redirect to
        navigate('/cart/')
    }
    const productsWithImages = getProductsWithImages(products)
    const productGT = productsWithImages.find((pr: any) => pr.id == productIds.gt)


    return (

        <section className={cn('section', 'products')}>
            <div className="container">
                {/* {(title || subtitle) && (
                    <div className="products__header">
                        {title && (
                            <h2 className="products__title text-center h1">
                                <FormattedMessage id={title} />
                            </h2>
                        )}
                        {subtitle && (
                            <p className="products__subtitle text-center h4">
                                <FormattedMessage id={subtitle} />
                            </p>
                        )}
                    </div>
                )} */}

                <div className="row no-gutters products__list">
                    <ProductsItemGT
                        {...productGT}
                        moreLink={productGT.pageLink}
                        key={productGT.title}
                        addToCartClick={addToCartClick}

                    />
                </div>
            </div>
        </section>

    );
}


export { ProductsMainComponent };

