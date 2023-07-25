import React, { ComponentProps, FC } from 'react';

import { Link } from "gatsby";
import {
  product as productProps,
} from '../../../../data/page-gt'
import './ProductCardGT.scss';
import { FormattedMessage } from 'react-intl';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { StaticImage } from 'gatsby-plugin-image';
import { Button, notification } from '../../../ui';
import { useCart } from '../../../../hooks/useCart';
import { getProductDataById } from '../../../../utils';
import { productIds } from '../../../../types/product';
import { AppButtonsComponent } from '../../AppButtons/AppButtons';
import { getPrice } from '../../../../utils/getPrice';

type SwiperProps = ComponentProps<typeof Swiper>

SwiperCore.use([Pagination])


const ProductCardGTComponent: FC = () => {
  const { addToCart } = useCart();
  const productId = productIds.gt;
  const monteGT = getPrice(productId);
  const onClick = () => {
    addToCart(monteGT.id)
    // todo: сделать через мидлвар
    notification.open({
      message: 'Added to cart.',
      description: 'Thanks!',
      duration: 2,
      top: 100,
    })
  }
  const swiperParams: SwiperProps = {
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
  }


  // FIXME
  return (

    <div
      className={'product-card'}
    >
      <Swiper className="product-card__slider" {...swiperParams}>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../../assets/images/monte-gt.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../../assets/images/monte-gt-2.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../../assets/images/monte-gt-3.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../../assets/images/monte-gt-4.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../../assets/images/monte-gt-5.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
      </Swiper>

      <>
        <FormattedMessage id="pageGT.addToBag">
          {formattedBtnText => (
            <Button
              className="product-card__btn"
              block
              onClick={onClick}
            >
              {formattedBtnText}
            </Button>
          )}
        </FormattedMessage>
        <div className="product-card__text">
          <FormattedMessage id={'pageGT.needHelp'} />
          <Link to={productProps.contactsLink}>
            <FormattedMessage id={'pageGT.contactUs'} />
          </Link>
        </div>
        <div className="product-card__footer">
          <AppButtonsComponent />
        </div>
      </>
    </div>

  );
}


export { ProductCardGTComponent };

