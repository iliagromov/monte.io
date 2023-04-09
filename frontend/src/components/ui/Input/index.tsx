import React, { FC, useState, useMemo } from 'react'
import { Input as AntInput } from 'antd'
import { InputProps as AntInputProps } from 'antd/lib/input'
import { getRandomId } from '../../../utils'
import cn from 'classnames'
import Button from '../Button'

import './style.scss'

export type InputProps = AntInputProps & {
  label?: string
  isError?: boolean
  submitBtn?: string
  isSubmitBtnDisabled?: boolean
  hint?: string
  hintType?: 'error' | 'success'
  inputClassName?: string
}

export const Input: FC<InputProps> = ({
  inputClassName,
  className,
  id,
  label,
  placeholder,
  onFocus,
  onBlur,
  isError,
  submitBtn,
  isSubmitBtnDisabled,
  hint,
  hintType = 'error',
  ...restProps
}) => {
  const [isActive, setIsActive] = useState(false)
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (label) {
      setIsActive(true)
    }
    if (typeof onFocus === 'function') {
      onFocus(e)
    }
  }
  const inputOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (label && !e.target.value.length) {
      setIsActive(false)
    }
    if (typeof onBlur === 'function') {
      onBlur(e)
    }
  }

  const inputId = useMemo(() => id || getRandomId('input'), [])

  const activeState = (placeholder && label) || isActive

  return (
    <div className={cn('input-field', className)}>
      <div className="input-field__box">
        <AntInput
          className={cn(
            'input-field__control',
            {
              'input-field__control--label-offset': activeState,
              'input-field__control--has-label': !!label,
              'input-field__control--has-error': isError,
              'input-field__control--has-submit': submitBtn,
            },
            inputClassName
          )}
          id={inputId}
          onFocus={inputOnFocus}
          onBlur={inputOnBlur}
          placeholder={placeholder}
          {...restProps}
        />
        {submitBtn && (
          <Button
            htmlType="submit"
            type="link"
            className="input-field__submitButton"
            disabled={isSubmitBtnDisabled}
          >
            {submitBtn}
          </Button>
        )}
        {label && (
          <label
            className={cn('input-field__label', {
              'input-field__label--active': activeState,
            })}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
      </div>

      {hint && (
        <label
          htmlFor={inputId}
          className={cn('input-field__hint', {
            [`input-field__hint--${hintType}`]: hintType,
          })}
        >
          {hint}
        </label>
      )}
    </div>
  )
}

export default Input
