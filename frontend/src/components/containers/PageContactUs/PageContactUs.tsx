import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  bannerData,
  greeting as greetingProps,
  mapSection,
} from '../../../data/page-contact-us'
import { AddressMap } from './components/AddressMap'
import ContactsWithMap from './components/ContactsWithMap'
import ContactUsGreeting from './components/ContactUsGreeting'
import { SupportBanner } from './components/SupportBanner'
// @ts-ignore
import styles from './PageContactUs.module.scss'

type PageContactUsProps = {}

const PageContactUs: FC<PageContactUsProps> = () => {
  return (
    <>
      <ContactUsGreeting {...greetingProps} />
      <ContactsWithMap
        title={mapSection.title}
        subTitle={mapSection.subTitle}
        actionTitle={mapSection.actionTitle}
        email={mapSection.email}
        phone={mapSection.phone}
        address={mapSection.address}
        map={
          <AddressMap
            addressCoors={mapSection.addressCoors}
            className="contacts-with-map__map"
          />
        }
      />
    </>
  )
}

export default PageContactUs
