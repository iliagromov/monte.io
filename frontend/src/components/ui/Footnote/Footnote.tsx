import React, { FC } from 'react'
import cn from 'classnames'

import './style.scss'

export type FootnoteProps = {
  className?: string
  withContainer?: boolean
}

export const Footnote: FC<FootnoteProps> = ({
  children,
  className,
  withContainer = false,
}) => {
  return (
    <div className={cn('footnote', className)}>
      {withContainer ? <div className="container">{children}</div> : children}
    </div>
  )
}

export default Footnote
