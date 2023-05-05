import React, { FC, useMemo } from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps as AntInputProps } from 'antd/lib/checkbox'
import { getRandomId } from '../../../utils'
import cn from 'classnames'

import './style.scss'

export type CheckboxProps = AntInputProps & {
  boxClassName?: string
  hint?: string
  hintType?: 'error' | 'success'
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  boxClassName,
  id,
  hint,
  hintType = 'error',
  ...restProps
}) => {
  const checkboxId = useMemo(() => id || getRandomId('checkbox'), [])

  return (
    <div className={cn('checkbox', className)}>
      <AntCheckbox
        className={cn('checkbox__control', boxClassName)}
        id={checkboxId}
        {...restProps}
      />

      {hint && (
        <div
          className={cn('checkbox__hint', {
            [`checkbox__hint--${hintType}`]: hintType,
          })}
        >
          {hint}
        </div>
      )}
    </div>
  )
}

export default Checkbox
