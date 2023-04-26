import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import Service, {
  SendEmailArgsType,
  SendEmailResponseType,
} from '../../../../api'
import { SubscribeFormValues } from '.'

const initialValues: SubscribeFormValues = {
  email: '',
}

// todo: проработать типизацию
const validationSchema = Yup.object({
  email: Yup.string()
    .email('checkoutForm.invalidEmail')
    .required('checkoutForm.required'),
})

export const useSubscribe = () => {
  const [isModalShowed, setIsModalShowed] = useState(false)
  const [responseError, setResponseError] = useState<string>()
  const [isSubmited, setIsSubmited] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)

  const closeModal = () => setIsModalShowed(false)

  const onSubmit = async (values: SubscribeFormValues) => {
    setSubmitting(true)

    const data: SendEmailArgsType = {
      email: values.email,
    }

    const response: SendEmailResponseType = await Service.getInstance().sendEmail(
      data
    )

    if (response.ok) {
      setResponseError(undefined)
      setIsSubmited(true)
    } else {
      const message = Array.isArray(response.message)
        ? response.message.join('. ')
        : response.message
      setResponseError(message)
    }

    setSubmitting(false)
    setIsModalShowed(true)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  useEffect(() => {
    if (isSubmited) {
      formik.resetForm()
    }
  }, [isSubmited])

  return {
    formik,
    isModalShowed,
    responseError,
    isSubmitting,
    closeModal,
  }
}
