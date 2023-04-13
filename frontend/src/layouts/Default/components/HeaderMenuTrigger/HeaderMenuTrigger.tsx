import cn from 'classnames'
import React, { FC } from 'react'
import './style.scss'

type HeaderMenuTriggerProps = {
  className?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const HeaderMenuTrigger: FC<HeaderMenuTriggerProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      className={cn('menu-trigger', className)}
      type="button"
      onClick={onClick}
    >
      <i className="menu-trigger__icon" />
    </button>
  )
}
