import cn from 'classnames'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { ProductId, productsMap } from '../../../types/product'
import { Button, Icon, IconNamesType } from '../../ui'
import './style.scss'

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
    <Img
      className={cn(
        `position-absolute`,
        `${blockName}__img-wrap`,
        `${blockName}__img-wrap--${name}`
      )}
      imgStyle={{
        objectFit: 'scale-down',
      }}
      fluid={img}
      key={name}
    />
  ))

  const renderContent = (
    <>
      <h1 className={`${blockName}__title`}>
        <FormattedMessage id={title} />
      </h1>
      <div className={`${blockName}__descr`}>
        <FormattedMessage id={descr} />
      </div>

      <div className={`${blockName}__advantages`}>
        <ul className={`${blockName}__advantages-list row mx-n1 mx-lg-n2`}>
          {renderAdvantages}
        </ul>
      </div>
      <div className={`${blockName}__btn-wrap`}>
        {showbtn ? (
          <Button
            onClick={onClick}
            className={`${blockName}__btn`}
            href={btnHref}
            block
          >
            <span>
              <FormattedMessage id={btnText} />
            </span>
          </Button>
        ) : (
          <h1 className="product-main__title"> out of stock</h1>
        )}
      </div>
    </>
  )

  return (
    <section className={`section ${blockName}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">{renderContent}</div>

          <div className="col-md-4 d-flex">
            <div
              className={cn(
                'flex-shrink-0',
                `${blockName}__img-holder`,
                `${blockName}__img-holder--${productsMap[id]}`
              )}
            >
              {renderImages}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductMain
