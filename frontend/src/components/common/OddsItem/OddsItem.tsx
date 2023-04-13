import React, { FC, useState } from 'react'
import { Icon, IconProps } from '../../ui'
import cn from 'classnames'
import { FormattedMessage, useIntl } from 'react-intl'
import { Popover } from 'antd'

import './style.scss'

export type OddsItemProps = {
  icon: IconProps['name']
  title: string
  text: string
}

const OddsItem: FC<OddsItemProps> = ({ icon, title, text }) => {
  const [isPopOverVisible, setIsPopOverVisible] = useState(false)
  const { formatMessage } = useIntl()
  const itemTitle = formatMessage({ id: title })

  const onVisibleChange = (isVisible: boolean) => setIsPopOverVisible(isVisible)

  const popoverContent = (
    <FormattedMessage
      id={text}
      values={{
        p: chunks => <p>{chunks}</p>,
      }}
    />
  )

  const renderIcon = (
    <Icon
      name={icon}
      className={cn(
        'odds-item__icon',
        `odds-item__icon--${icon}`,
        isPopOverVisible && 'odds-item__icon--active'
      )}
    />
  )

  return (
    <div className="odds-item">
      {renderIcon}

      <div
        className={cn(
          'odds-item__title',
          'odds-item__title--cursor-help',
          isPopOverVisible && 'odds-item__title--active'
        )}
        dangerouslySetInnerHTML={{ __html: itemTitle }}
      />

      <Popover
        content={popoverContent}
        trigger="click"
        placement="bottomLeft"
        overlayClassName="odds-item-popover"
        onVisibleChange={onVisibleChange}
      >
        <i className="odds-item__mobile-overlay" />
      </Popover>

      <div className="odds-item__popup">
        {renderIcon}

        <div
          className="odds-item__title"
          dangerouslySetInnerHTML={{ __html: itemTitle }}
        />

        <div className="odds-item__popup-content">{popoverContent}</div>
      </div>
    </div>
  )
}

export default OddsItem
