import React, { FC } from 'react'
import cn from 'classnames'

import './style.scss'

export type HeadingProps = {
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  like?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Компонент для вывода заголовков
 */
export const Heading: FC<HeadingProps> = ({
  className,
  children,
  tag = 'h1',
  like,
}) => {
  const Component = tag

  return (
    <Component
      className={cn(
        {
          [`${like}`]: like,
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Heading
