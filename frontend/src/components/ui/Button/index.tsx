import React, { FC } from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProps as AntdButtonProps } from 'antd/lib/button'
import { navigate } from 'gatsby'
import cn from 'classnames'
import { getHrefWithLocale } from '../../../utils'
import { useIntl } from 'react-intl'

import './style.scss'

export type ButtonProps = AntdButtonProps & {
  /**
   * ссылка должна быть без учета выбранного языка
   */
  href?: string
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type = 'primary',
  shape = 'round',
  size = 'large',
  onClick,
  href,
  ...restProps
}) => {
  const intl = useIntl()
  const hrefWithLocale = getHrefWithLocale(intl, href)

  const enchancedOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
    if (!!href) {
      e.preventDefault()
      navigate(hrefWithLocale)
    }
  }

  return (
    <AntdButton
      type={type}
      shape={shape}
      size={size}
      className={cn('ant-btn-custom', className)}
      onClick={enchancedOnClick}
      href={hrefWithLocale}
      {...restProps}
    >
      {children}
    </AntdButton>
  )
}

export default Button
