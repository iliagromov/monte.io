import React, { FC } from 'react'
import Icon from '../Icon'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import './style.scss'

export type WhatsAppButtonProps = {
  text: string
  href: string
  className?: string
}

export const WhatsAppButton: FC<WhatsAppButtonProps> = ({
  text,
  href,
  className,
}) => {
  const blockName = 'whatsapp-button'

  return (
    <a href={href} target="_blank" className={cn(blockName, className)}>
      <Icon name="whatsapp" className={`${blockName}__icon`} />
      <span className={`${blockName}__text`}>
        <FormattedMessage id={text} />
      </span>
    </a>
  )
}

export default WhatsAppButton
