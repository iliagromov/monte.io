import React, { FC } from 'react'
import cn from 'classnames'
import { Rate as RateComponent } from 'antd'
import { RateProps as RateComponentProps } from 'antd/lib/rate'

import 'antd/es/rate/style'
import './style.scss'

export type RateProps = RateComponentProps & {}

export const Rate: FC<RateProps> = ({ className, ...restProps }) => {
  return (
    <RateComponent
      className={cn('ant-rate-custom', className)}
      {...restProps}
    />
  )
}

export default Rate
