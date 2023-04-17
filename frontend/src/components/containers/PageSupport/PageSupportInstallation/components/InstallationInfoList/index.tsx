import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Icon } from '../../../../../ui'
import './style.scss'

export type InfoItem = {
  icon: 'wrench' | 'clock'
  textId: string
}

type InstallationInfoListProps = {
  infoItems: InfoItem[]
  className?: string
}

export const InstallationInfoList: FC<InstallationInfoListProps> = ({
  infoItems,
  className,
}) => {
  const renderInfoItems = infoItems.map(({ icon, textId }) => (
    <li
      className="installation-info-list__info-item info-item col-md px-lg-0"
      key={`${icon}_${textId}`}
    >
      <Icon name={icon} className="info-item__icon" />
      <div className="info-item__text">
        <FormattedMessage id={textId} />
      </div>
    </li>
  ))

  return (
    <div className={cn('installation-info-list', className)}>
      <ul className="installation-info-list__row row mx-lg-0">
        {renderInfoItems}
      </ul>
    </div>
  )
}
