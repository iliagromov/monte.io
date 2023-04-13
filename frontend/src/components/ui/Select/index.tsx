import React, { FC, ComponentProps, useState, useCallback } from 'react'
import { Select as SelectComponent } from 'antd'
import cn from 'classnames'

import 'antd/es/select/style'
import './style.scss'

const { Option } = SelectComponent

export type SelectProps = ComponentProps<typeof SelectComponent> & {
  multiline?: boolean
  label?: string
}

export const Select: FC<SelectProps> = ({
  multiline,
  children,
  className,
  label,
  defaultValue,
  value,
  dropdownClassName,
  onChange,
  ...restProps
}) => {
  const [initialValue] = useState(defaultValue || value || '')
  const [dirty, setDirty] = useState(false)

  const enchancedOnChange = useCallback(
    (value, option) => {
      if (initialValue !== value) {
        setDirty(true)
      } else {
        setDirty(false)
      }

      if (onChange) {
        onChange(value, option)
      }
    },
    [initialValue, onChange]
  )

  return (
    <SelectComponent
      className={cn('ant-select-custom', className, {
        'ant-select-custom--dirty': dirty,
      })}
      dropdownClassName={cn('ant-select-dropdown-custom', dropdownClassName, {
        'ant-select-dropdown-custom--multiline': multiline,
      })}
      data-label={label}
      defaultValue={defaultValue}
      value={value}
      onChange={enchancedOnChange}
      {...restProps}
    >
      {children}
    </SelectComponent>
  )
}

export { Option }
export default Select
