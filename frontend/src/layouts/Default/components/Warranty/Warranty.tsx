import { RightOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Icon, IconProps } from '../../../../components/ui'
import { getBaseUrl } from '../../../../utils'
import './style.scss'

type WarrantyProps = {
  items: {
    icon: IconProps['name']
    titleText: string
    descr: string
    linkText: string
    linkSlug: string
  }[]
}

export const Warranty: FC<WarrantyProps> = ({ items }) => {
  const intl = useIntl()
  const baseUrl = getBaseUrl(intl)

  const renderItems = items.map(
    ({ icon, titleText, descr, linkText, linkSlug = '/' }) => (
      <li className="warranty__item col-md" key={titleText}>
        <div className="item-warranty">
          <Icon
            name={icon}
            className={cn(
              'item-warranty__icon',
              `item-warranty__icon--${icon}`
            )}
          />
          <div className="item-warranty__title">
            <FormattedMessage id={titleText} />
          </div>
          <div className="item-warranty__descr">
            <FormattedMessage id={descr} />
          </div>
          <div className="item-warranty__link-wrap">
            {/* <Link className="item-warranty__link" to={`${baseUrl}${linkSlug}`}>
              <FormattedMessage id={linkText} />
              <RightOutlined className="item-warranty__link-icon" />
            </Link> */}
          </div>
        </div>
      </li>
    )
  )

  return (
    <section className="section warranty">
      <div className="container">
        <ul className="warranty__list row">{renderItems}</ul>
      </div>
    </section>
  )
}
