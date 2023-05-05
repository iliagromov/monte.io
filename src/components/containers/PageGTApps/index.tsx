import cn from 'classnames'
import React, { FC } from 'react'
import {
  appButtons as appButtonsProps,
  productCard as productCardProps,
} from '../../../data/page-gtapps'
import ProductCard from '../../common/ProductCard'
import { AppButtons } from '../PageMonteGT/components/AppButtons'

const PageGTApps: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div
          className={cn(
            'col-md-6',
            'col-xl-12',
            'd-flex',
            'justify-content-center'
          )}
        >
          <ProductCard
            footerContent={<AppButtons {...appButtonsProps} />}
            images={productCardProps.images}
            imgRatio="4x3"
            contactsLink={productCardProps.contactsLink}
            isGtApps={true}
          />
        </div>
      </div>
    </section>
  )
}

export default PageGTApps
