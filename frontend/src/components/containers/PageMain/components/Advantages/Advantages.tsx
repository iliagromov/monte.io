import { RightOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { getBaseUrl } from '../../../../../utils'
import { Icon, IconProps } from '../../../../ui'
import './style.scss'

type AdvantagesProps = {
  titleText?: string
  titleClassName?: string
  items: {
    icon: IconProps['name']
    titleText: string
    descr: string
    linkText: string
    linkSlug: string
  }[]
}

export const Advantages: FC<AdvantagesProps> = ({
  items,
  titleText,
  titleClassName,
}) => {
  const intl = useIntl()
  const baseUrl = getBaseUrl(intl)

  const renderItems = items.map(
    ({ icon, titleText, descr, linkText, linkSlug = '/' }) => (
      <li className="advantages__item col-md" key={titleText}>
        <div className="item-advantages">
          <Icon name={icon} className="item-advantages__icon" />
          <div className="item-advantages__title h5">
            <FormattedMessage id={titleText} />
          </div>
          <div className="item-advantages__descr">
            <FormattedMessage id={descr} />
          </div>
          <div className="item-advantages__link-wrap">
            <Link
              className="item-advantages__link"
              to={`${baseUrl}${linkSlug}`}
            >
              <FormattedMessage id={linkText} />
              <RightOutlined className="item-advantages__link-icon" />
            </Link>
          </div>
        </div>
      </li>
    )
  )

  return (
    <section className="section advantages">
      <div className="container">
        {titleText && (
          <h2
            className={cn('advantages__title', 'text-center', titleClassName)}
          >
            <FormattedMessage id={titleText} />
          </h2>
        )}
        <ul className="advantages__list row">{renderItems}</ul>
      </div>
    </section>
  )
}
