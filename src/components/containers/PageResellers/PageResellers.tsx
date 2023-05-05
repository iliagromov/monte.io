import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { resellersSection } from '../../../data/page-resellers'
import { getHrefFromTelStr } from '../../../utils'
// @ts-ignore
import styles from './PageResellers.module.scss'

type PageResellersProps = {}

const PageResellers: FC<PageResellersProps> = () => {
  const renderContactsItems = resellersSection.magazines.map(magazin => {
    return (
      <>
        <p className="h4 mb-4">
          <FormattedMessage id={magazin.name} />
        </p>
        {magazin.cites.map(city => {
          return (
            <ul className="contact-us__list mb-5">
              <li className="contact-us__item h5">{city.title}</li>
              {city.info.map(i => {
                return <li className="contact-us__item">{i}</li>
              })}
              <a
                href={city.link.href}
                target={city.link.href && '_blank'}
                className="contact-us__item-text"
              >
                {city.link.name}
              </a>
            </ul>
          )
        })}
      </>
    )
  })
  const renderContacts = (
    <div className="contact-us">
      <h3 className="h3 mb-4">
        <FormattedMessage id={resellersSection.title} />
      </h3>
      {renderContactsItems}
    </div>
  )
  return (
    <section className="contacts-with-map section">
      <div className="container ">
        <div className="row">
          <div className="col-xl-10 mx-auto position-static">
            <div className="row">
              <div className="col-md-12">{renderContacts}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageResellers
