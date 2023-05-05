import React from 'react'
import { useIntl } from 'react-intl'
import {
  errorMessage,
  placeholder,
  submitButtonText,
} from '../../../../../data/discount-form'
import { Input } from '../../../../ui'
import { useDiscount } from './useDiscount'

export const DiscountForm = () => {
  const {
    formikDiscount: {
      isSubmitting,
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
    },
  } = useDiscount()
  const intl = useIntl()
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="discount"
        isError={Boolean(errors.discount && touched.discount)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.discount}
        placeholder={intl.formatMessage({ id: placeholder })}
        submitBtn={intl.formatMessage({ id: submitButtonText })}
        isSubmitBtnDisabled={
          !values.discount || !!errors.discount || isSubmitting
        }
      />
      {errors.discount && touched.discount && (
        <span className="input__error-message">
          {intl.formatMessage({ id: errorMessage })}
        </span>
      )}
    </form>
  )
}
