import { FormikProps } from 'formik'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import {
  labelAddress,
  labelCheckbox,
  labelCheckBoxLinkText,
  labelCity,
  labelComment,
  labelCountry,
  labelEmail,
  labelFirst,
  labelLast,
  labelPhone,
  labelPostal,
  placeholderAddress,
  placeholderCity,
  placeholderCountry,
  placeholderEmail,
  placeholderFirst,
  placeholderLast,
  placeholderPhone,
  placeholderPostal,
  titleContactInformation,
  titleShippingAddress,
} from '../../../../../data/checkout-form'
import { Checkbox, Input } from '../../../../ui'
import './style.scss'

export type CheckoutFormValues = {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  country: string
  zipCode: string
  phone: string
  comment?: string
  checkbox: boolean
}

type Props = {
  formik: FormikProps<CheckoutFormValues>
}

const CheckoutForm: FC<Props> = ({ formik }) => {
  const intl = useIntl()
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = formik

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <p className="h4 mt-2">
          {intl.formatMessage({ id: titleContactInformation })}
        </p>

        <Input
          className="mb-3"
          required
          type="email"
          name="email"
          isError={Boolean(errors.email && touched.email)}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          label={intl.formatMessage({ id: labelEmail })}
          placeholder={intl.formatMessage({ id: placeholderEmail })}
          hint={
            errors.email && touched.email
              ? intl.formatMessage({ id: errors.email })
              : undefined
          }
        />

        <p className="h4 mt-4">
          {intl.formatMessage({ id: titleShippingAddress })}
        </p>

        <div className="row mb-3">
          <div className="col-sm mb-3 mb-sm-0">
            <Input
              required
              type="text"
              name="firstName"
              isError={Boolean(errors.firstName && touched.firstName)}
              onChange={handleChange}
              onBlur={handleBlur}
              label={intl.formatMessage({ id: labelFirst })}
              placeholder={intl.formatMessage({ id: placeholderFirst })}
              hint={
                errors.firstName && touched.firstName
                  ? intl.formatMessage({ id: errors.firstName })
                  : undefined
              }
            />
          </div>
          <div className="col-sm">
            <Input
              required
              type="text"
              name="lastName"
              isError={Boolean(errors.lastName && touched.lastName)}
              onChange={handleChange}
              onBlur={handleBlur}
              label={intl.formatMessage({ id: labelLast })}
              placeholder={intl.formatMessage({ id: placeholderLast })}
              hint={
                errors.lastName && touched.lastName
                  ? intl.formatMessage({ id: errors.lastName })
                  : undefined
              }
            />
          </div>
        </div>

        <Input
          className="mb-3"
          required
          type="text"
          name="address"
          isError={Boolean(errors.address && touched.address)}
          onChange={handleChange}
          onBlur={handleBlur}
          label={intl.formatMessage({ id: labelAddress })}
          placeholder={intl.formatMessage({ id: placeholderAddress })}
          hint={
            errors.address && touched.address
              ? intl.formatMessage({ id: errors.address })
              : undefined
          }
        />

        <Input
          className="mb-3"
          required
          type="text"
          name="city"
          isError={Boolean(errors.city && touched.city)}
          onChange={handleChange}
          onBlur={handleBlur}
          label={intl.formatMessage({ id: labelCity })}
          placeholder={intl.formatMessage({ id: placeholderCity })}
          hint={
            errors.city && touched.city
              ? intl.formatMessage({ id: errors.city })
              : undefined
          }
        />

        <div className="row mb-3">
          <div className="col-sm mb-3 mb-sm-0">
            <Input
              required
              type="text"
              name="country"
              isError={Boolean(errors.country && touched.country)}
              onChange={handleChange}
              onBlur={handleBlur}
              label={intl.formatMessage({ id: labelCountry })}
              placeholder={intl.formatMessage({ id: placeholderCountry })}
              hint={
                errors.country && touched.country
                  ? intl.formatMessage({ id: errors.country })
                  : undefined
              }
            />
          </div>

          <div className="col-sm">
            <Input
              required
              type="text"
              name="zipCode"
              isError={Boolean(errors.zipCode && touched.zipCode)}
              onChange={handleChange}
              onBlur={handleBlur}
              label={intl.formatMessage({ id: labelPostal })}
              placeholder={intl.formatMessage({ id: placeholderPostal })}
              hint={
                errors.zipCode && touched.zipCode
                  ? intl.formatMessage({ id: errors.zipCode })
                  : undefined
              }
            />
          </div>
        </div>

        <Input
          className="mb-3"
          required
          type="tel"
          name="phone"
          isError={Boolean(errors.phone && touched.phone)}
          onChange={handleChange}
          onBlur={handleBlur}
          label={intl.formatMessage({ id: labelPhone })}
          placeholder={intl.formatMessage({ id: placeholderPhone })}
          hint={
            errors.phone && touched.phone
              ? intl.formatMessage({ id: errors.phone })
              : undefined
          }
        />

        <Input
          className="mb-3"
          type="text"
          name="comment"
          isError={Boolean(errors.comment && touched.comment)}
          onChange={handleChange}
          onBlur={handleBlur}
          label={intl.formatMessage({ id: labelComment })}
          hint={
            errors.comment && touched.comment
              ? intl.formatMessage({ id: errors.comment })
              : undefined
          }
        />

        <Checkbox
          className="mt-5"
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          defaultChecked
          checked={values.checkbox}
          hint={
            errors.checkbox && touched.checkbox
              ? intl.formatMessage({ id: errors.checkbox })
              : undefined
          }
        >
          {intl.formatMessage({ id: labelCheckbox })}{' '}
          <Link
            to="/privacy"
            target="_blank"
            className="p-0 input__checkbox-link"
          >
            {intl.formatMessage({ id: labelCheckBoxLinkText })}
          </Link>
        </Checkbox>
      </form>
    </div>
  )
}

export default CheckoutForm
