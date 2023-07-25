import React, { FC, ComponentProps } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { Button, ImgProps } from '../../ui'
import { Link, } from 'gatsby'
import { useIntl } from 'react-intl'
import { getHrefWithLocale } from '../../../utils'
import { FormattedMessage } from 'react-intl'

import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'

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
 


  return (
    <div
      className={cn('product-card', className, {
        'product-card--has-footer': isHasFooter,
        'product-card--sticky': isSticky,
      })}
    >
       <Swiper className="product-card__slider" {...swiperParams}>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../assets/images/monte-gt.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../assets/images/monte-gt-2.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../assets/images/monte-gt-3.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../assets/images/monte-gt-4.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
        <SwiperSlide className="product-card__slide">
          <StaticImage
            src='../../../assets/images/monte-gt-5.png'
            className="product-card__slide-img"
            alt={'img'}
          />
        </SwiperSlide>
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
