import React, { CSSProperties, FC } from 'react'
import { useIntl } from 'react-intl'
import { Button, Heading, Input } from '../../../../components/ui'
import './style.scss'
import { SubscribeModal } from './SubscribeModal'
import { useSubscribe } from './useSubscribe'

const blockName = 'subscribe'

export type SubscribeFormValues = {
  email: string
}

type SubscribeProps = {
  title: string
  text: string
  emailPlaceholder: string
  submitText: string
}

export const Subscribe: FC<SubscribeProps> = ({
  title,
  text,
  emailPlaceholder,
  submitText,
}) => {
  const blockStyles: CSSProperties = {
    backgroundImage: `url('/img/mercedes.png')`,
  }

  const { formatMessage } = useIntl()
  const titleText = formatMessage({ id: title })
  const descrText = formatMessage({ id: text })
  const placeholderText = formatMessage({ id: emailPlaceholder })
  const btnText = formatMessage({ id: submitText })

  const {
    formik: {
      handleSubmit,
      handleChange,
      handleBlur,
      submitForm,
      values,
      errors,
      touched,
    },
    responseError,
    isModalShowed,
    isSubmitting,
    closeModal,
  } = useSubscribe()

  const isEmailError = Boolean(errors.email && touched.email)
  const emailHint = isEmailError
    ? formatMessage({ id: errors.email })
    : undefined

  return (
    <div className={`${blockName}`} style={blockStyles}>
      <div className={`${blockName}__header`}>
        <Heading tag="h3" className={`${blockName}__title mb-3 mb-md-1`}>
          {titleText}
        </Heading>

        <div className={`${blockName}__text mb-4`}>{descrText}</div>
      </div>

      <form className={`${blockName}__form`} onSubmit={handleSubmit}>
        <div className="row mt-n3 mx-n2">
          <div className="col-lg mt-3 px-2">
            <Input
              type="email"
              name="email"
              isError={isEmailError}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder={placeholderText}
              hint={emailHint}
            />
          </div>
          <div className="col-lg mt-3 px-2">
            <Button
              block
              className={`${blockName}__btn`}
              onClick={submitForm}
              disabled={isSubmitting || isModalShowed}
              loading={isSubmitting}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </form>

      <SubscribeModal
        isShowed={isModalShowed}
        closeModal={closeModal}
        errorText={responseError}
      />
    </div>
  )
}
