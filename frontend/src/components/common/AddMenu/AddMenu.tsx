import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Link } from 'gatsby'
import cn from 'classnames'
import { Icon, IconProps } from '../../ui'
import { getBaseUrl } from '../../../utils'

import './style.scss'

type AddMenuProps = {
  mod?: 'absolute' | 'sticky'
  items: {
    icon: IconProps['name']
    label: string
    slug: string
  }[]
}

const AddMenu: FC<AddMenuProps> = ({ items, mod }) => {
  const intl = useIntl()
  const baseUrl = getBaseUrl(intl)

  const renderItems = items.map(({ label, slug, icon }) => {
    return (
      <li key={`id-${label}`} className="add-menu__item">
        <FormattedMessage id={label}>
          {formattedLabel => (
            <Link
              to={`${baseUrl}${slug}`}
              className="add-menu__link"
              activeClassName="add-menu__link--active"
            >
              <Icon name={icon} className="add-menu__icon" />
              {formattedLabel}
            </Link>
          )}
        </FormattedMessage>
      </li>
    )
  })

  return (
    <div
      className={cn('add-menu', {
        [`add-menu--${mod}`]: mod,
      })}
    >
      <div className="add-menu__scroll">
        <ul className="add-menu__list">{renderItems}</ul>
      </div>
    </div>
  )
}

export default AddMenu
