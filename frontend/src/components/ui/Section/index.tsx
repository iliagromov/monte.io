import cn from 'classnames'
import React, { FC } from 'react'
import { getClassNameModificators } from '../../../utils'
import './style.scss'

type SectionMod = 'under-header' | 'pt-lg' | 'py-lg' | 'py-low'

export type SectionProps = {
  className?: string
  tag?: 'section' | 'div'
  withContainer?: boolean
  mod?: SectionMod | SectionMod[]
}

export const Section: FC<SectionProps> = ({
  className,
  tag = 'section',
  withContainer,
  children,
  mod,
}) => {
  const Component = tag

  return (
    <Component
      className={cn(
        'section',
        getClassNameModificators('section', mod),
        className
      )}
    >
      {withContainer ? <div className="container">{children}</div> : children}
    </Component>
  )
}
