import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Icon, WhatsAppButton } from '../../../../../components/ui'
import { getHrefFromTelStr } from '../../../../../utils'
import './style.scss'

type MailContactType = {
  type: 'mail'
  iconName: 'mail'
  mail: string
}

type PhoneContactType = {
  type: 'tel'
  iconName: 'phone'
  phone: string
}

type AddressContactType = {
  type: 'address'
  iconName: 'location'
  addressText: string
  coors: {
    lat: string | number
    lng: string | number
  }
}

type InfoContactType = {
  type: 'info'
  iconName: 'chat-contour' | 'clock-4-hours'
  text: string
}

export type ContactItemType =
  | MailContactType
  | PhoneContactType
  | AddressContactType
  | InfoContactType

type PopupProps = {
  isOpen: boolean
  heading: string
  contacts: ContactItemType[]
  whatsAppButtonData: {
    text: string
    href: string
  }
  closePopup: () => void
  className?: string
}

const Popup: FC<PopupProps> = ({
  isOpen,
  heading,
  contacts,
  whatsAppButtonData,
  closePopup,
  className,
}) => {
  const blockName = 'feed-back-popup'

  const renderItem = (item: ContactItemType) => {
    switch (item.type) {
      case 'mail':
        return (
          <>
            <div className={'feed-back-contacts-item__icon-wrap'}>
              <Icon
                name={item.iconName}
                className="feed-back-contacts-item__icon"
              />
            </div>
            <a
              href={`mailto:${item.mail}`}
              className="feed-back-contacts-item__text"
            >
              {item.mail}
            </a>
          </>
        )
      case 'tel':
        return (
          <>
            <div className={'feed-back-contacts-item__icon-wrap'}>
              <Icon
                name={item.iconName}
                className="feed-back-contacts-item__icon"
              />
            </div>
            <a
              href={`tel:${getHrefFromTelStr(item.phone)}`}
              className="feed-back-contacts-item__text"
            >
              {item.phone}
            </a>
          </>
        )
      case 'address':
        return (
          <>
            <div className={'feed-back-contacts-item__icon-wrap'}>
              <Icon
                name={item.iconName}
                className="feed-back-contacts-item__icon"
              />
            </div>
            <a
              href={`http://www.google.com/maps/place/${item.coors.lat},${item.coors.lng}`}
              className="feed-back-contacts-item__text"
              target="_blank"
            >
              <FormattedMessage id={item.addressText} />
            </a>
          </>
        )
      case 'info':
        return (
          <>
            <div className={'feed-back-contacts-item__icon-wrap'}>
              <Icon
                name={item.iconName}
                className="feed-back-contacts-item__icon"
              />
            </div>
            <span className="feed-back-contacts-item__text">
              <FormattedMessage id={item.text} />
            </span>
          </>
        )
    }
  }

  const renderContacts = contacts.map((item, index) => (
    <li
      className={`${blockName}__contacts-item feed-back-contacts-item`}
      key={index}
    >
      {renderItem(item)}
    </li>
  ))

  return (
    <div
      className={cn(
        `${blockName}`,
        { [`${blockName}--hidden`]: !isOpen },
        className
      )}
    >
      <div className={`${blockName}__header`}>
        <Heading tag="h4" className={`${blockName}__heading`}>
          <FormattedMessage id={heading} />
        </Heading>
        <button
          className={`${blockName}__close-button icon-button`}
          onClick={closePopup}
        >
          <Icon name="cross" />
        </button>
      </div>
      <ul className={`${blockName}__contacts-list`}>{renderContacts}</ul>
      <WhatsAppButton
        href={whatsAppButtonData.href}
        text={whatsAppButtonData.text}
      />
    </div>
  )
}

export default Popup
