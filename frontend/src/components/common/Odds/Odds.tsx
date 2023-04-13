import React, { FC } from 'react'
import cn from 'classnames'
import { useIntl } from 'react-intl'
import OddsItem, { OddsItemProps } from '../OddsItem'

import './style.scss'

type OddsProps = {
  title: string
  items?: OddsItemProps[]
  className?: string
}

export const Odds: FC<OddsProps> = ({ items, title, className }) => {
  const intl = useIntl()
  const i18nTitle = intl.formatMessage({ id: title })

  const renderItems = items.map(item => {
    return (
      <li className="odds__item col-6 col-md-3 col-lg-4" key={item.title}>
        <OddsItem {...item} />
      </li>
    )
  })

  return (
    <div className={cn('odds', className)}>
      <h2
        className="odds__title h1"
        dangerouslySetInnerHTML={{ __html: i18nTitle }}
      />
      <ul className="odds__list row">{renderItems}</ul>
    </div>
  )
}

export default Odds
