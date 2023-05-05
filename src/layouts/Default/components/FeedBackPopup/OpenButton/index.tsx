import cn from 'classnames'
import React, { FC } from 'react'
import { Icon } from '../../../../../components/ui'
import './style.scss'

type OpenButtonProps = {
  isOpen: boolean
  onClick: (e: React.MouseEvent) => void
  iconName: 'chat'
  className?: string
}

const OpenButton: FC<OpenButtonProps> = ({
  isOpen,
  onClick,
  iconName,
  className,
}) => {
  const blockName = 'open-popup-button'

  return (
    <button
      className={cn(
        `${blockName}`,
        { [`${blockName}--hidden`]: isOpen },
        className
      )}
      type="button"
      onClick={onClick}
    >
      <Icon name={iconName} className={`${blockName}__icon`} />
    </button>
  )
}

export default OpenButton
