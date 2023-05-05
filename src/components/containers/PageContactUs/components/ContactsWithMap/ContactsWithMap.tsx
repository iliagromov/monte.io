import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { getHrefFromTelStr } from '../../../../../utils'
import { Icon, IconNamesType } from '../../../../ui'
import './style.scss'

type ContactsWithMapProps = {
  title: string
  actionTitle: string
  subTitle: string
  map: JSX.Element
  email: string
  phone: string
  address: string
}

const ContactsWithMap: FC<ContactsWithMapProps> = ({
  title,
  subTitle,
  actionTitle,
  map,
  email,
  phone,
  address,
}) => {
  const contactUsList: {
    icon: IconNamesType
    text: string
    href?: string
  }[] = [
    {
      icon: 'mail',
      text: email,
      href: `mailto:${email}`,
    },
    {
      icon: 'phone',
      text: phone,
      href: `tel:+${getHrefFromTelStr(phone)}`,
    },
    {
      icon: 'location',
      text: address,
    },
  ]

  const renderContactsItems = contactUsList.map(({ icon, text, href }) => {
    const TextElement = href ? 'a' : 'div'
    return (
      <li className="contact-us__item" key={text}>
        <Icon name={icon} className="contact-us__item-icon" />
        <TextElement
          href={href}
          target={href && '_blank'}
          className="contact-us__item-text"
        >
          {text}
        </TextElement>
      </li>
    )
  })

  const renderContacts = (
    <div className="contact-us">
      <h3 className="h3 mb-4">
        <FormattedMessage id={title} />
      </h3>
      <ul className="contact-us__list">{renderContactsItems}</ul>
      <div className="contact-us__footer">
        <p className="mb-1">
          <FormattedMessage id={subTitle} />
        </p>
        <a
          href={`mailto:${email}`}
          target="_blank"
          className="contact-us__footer-link"
        >
          <FormattedMessage id={actionTitle} />
          <Icon name="arrow-forward" className="contact-us__footer-icon" />
        </a>
      </div>
    </div>
  )

  return (
    <section className="contacts-with-map section">
      <div className="container ">
        <div className="row">
          <div className="col-xl-10 mx-auto position-static">
            <div className="row">
              <div className="col-md-5">{renderContacts}</div>
              <div className="col-md position-static">{map}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsWithMap
