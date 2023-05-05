import React, { FC } from 'react'
import Icon from '../Icon'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import './style.scss'

export type NavigationBackButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const NavigationBackButton: FC<NavigationBackButtonProps> = ({
  onClick,
  className,
}) => {
  const blockName = 'navigation-back-button'

  return (
    <button
      className={cn(`${blockName}`, className)}
      type="button"
      onClick={onClick}
    >
      <Icon name="arrow-back" className={`${blockName}__icon`} />
      <span className={`${blockName}__label`}>
        <FormattedMessage id="navigationBackButton.label" />
      </span>
    </button>
  )
}

export default NavigationBackButton
