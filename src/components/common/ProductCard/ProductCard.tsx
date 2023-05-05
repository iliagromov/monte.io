import React, { FC, ComponentProps } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { Button, Img, ImgProps } from '../../ui'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useIntl } from 'react-intl'
import { getHrefWithLocale } from '../../../utils'
import { FormattedMessage } from 'react-intl'

import {
  images
} from '../../../data/page-gt'


import './style.scss'

type SwiperProps = ComponentProps<typeof Swiper>

SwiperCore.use([Pagination])

type ProductCardProps = {
  images: {
    src?: ImgProps['src']
    srcset?: ImgProps['srcset']
  }[]
  imgRatio?: ImgProps['ratio']
  footerContent?: JSX.Element
  onBtnClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  contactsLink?: string
  className?: string
  isSticky?: boolean
  isGtApps?: boolean
  isBtn?: boolean
}

export const ProductCard: FC<ProductCardProps> = ({
  footerContent,
  onBtnClick,
  contactsLink = '#',
  className,
  isSticky,
  imgRatio,
  isGtApps,
  isBtn,
}) => {
  const showbtn = isBtn
  const intl = useIntl()
  const isHasFooter = !!footerContent

  const swiperParams: SwiperProps = {
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
  }

  const {
    monteGT,
    monteGT2,
    monteGT3,
    monteGT4,
    monteGT5,
    monteGT6,
  } = useStaticQuery(graphql`
    query {
      monteGT: file(relativePath: { eq: "monte-gt.png" }) {
          publicURL
          name
      }
      monteGT2: file(relativePath: { eq: "monte-gt-2.png" }) {
          publicURL
          name
      }
      monteGT3: file(relativePath: { eq: "monte-gt-3.png" }) {
          publicURL
          name
      }
      monteGT4: file(relativePath: { eq: "monte-gt-4.png" }) {
          publicURL
          name
      }
      monteGT5: file(relativePath: { eq: "monte-gt-5.png" }) {
          publicURL
          name
      }
      monteGT6: file(relativePath: { eq: "monte-gt-6.png" }) {
          publicURL
          name
      }
    }
  `);


  const images = [monteGT, monteGT2, monteGT3, monteGT4, monteGT5,monteGT6 ];
  const renderSlides = images.map(({ publicURL }, i) => (
    <SwiperSlide key={i} className="product-card__slide">
      <Img
        className="product-card__slide-img"
        objectFit="scale-down"
        src={publicURL}
        srcset={publicURL}
        ratio={imgRatio}
      />
      <div className="swiper-lazy-preloader" />
    </SwiperSlide>
  ))

  return (
    <div
      className={cn('product-card', className, {
        'product-card--has-footer': isHasFooter,
        'product-card--sticky': isSticky,
      })}
    >
      <Swiper className="product-card__slider" {...swiperParams}>
        {renderSlides}
      </Swiper>
      {isGtApps ? (
        <>
          {footerContent ? (
            <div className="product-card__footer">{footerContent}</div>
          ) : null}

          <div className="product-card__text">
            <FormattedMessage id={'pageGT.needHelp'} />
            {` `}
            <Link to={getHrefWithLocale(intl, contactsLink)}>
              <FormattedMessage id={'pageGT.contactUs'} />
            </Link>
          </div>
        </>
      ) : (
        <>
          {showbtn && (
            <FormattedMessage id="pageGT.addToBag">
              {formattedBtnText => (
                <Button
                  className="product-card__btn"
                  block
                  onClick={onBtnClick}
                >
                  {formattedBtnText}
                </Button>
              )}
            </FormattedMessage>
          )}
          <div className="product-card__text">
            <FormattedMessage id={'pageGT.needHelp'} />
            {` `}
            <Link to={getHrefWithLocale(intl, contactsLink)}>
              <FormattedMessage id={'pageGT.contactUs'} />
            </Link>
          </div>
          {footerContent ? (
            <div className="product-card__footer">{footerContent}</div>
          ) : null}
        </>
      )}
    </div>
  )
}

export default ProductCard
