import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import Service, { SendOrderArgsType } from '../../../../../api'
import { SUCCESS_PAYMENT, ERROR_PAYMENT } from '../../../../../data/routes'
import { useShallowEqualSelector } from '../../../../../hooks/useShallowEqualSelector'
import { cart } from '../../../../../store'
import { CheckoutFormValues } from '../CheckoutForm/CheckoutForm'
import { useCarSelects } from './useCarSelects'

// https://stripe.com/docs/payments/handling-payment-events

const stripePromise = loadStripe(process.env.PAYMENT_API_KEY)
type ProductsInCart = ReturnType<typeof cart.selectors.productsInCart>

export const useCheckoutForm = () => {
  const { year, model, maker, engine } = useCarSelects()
  const { code } = useShallowEqualSelector(state => state.promo)
  const productsInCart: ProductsInCart = useSelector(
    cart.selectors.productsInCart
  )

  const products = productsInCart.map(({ id, count }) => {
    return {
      id,
      quantity: count,
    }
  })

  const initialValues: CheckoutFormValues = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    phone: '',
    comment: '',
    checkbox: true,
  }

  // todo: проработать типизацию
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'checkoutForm.minLength')
      .max(15, 'checkoutForm.maxLength')
      .required('checkoutForm.required'),
    lastName: Yup.string()
      .min(2, 'checkoutForm.minLength')
      .max(15, 'checkoutForm.maxLength')
      .required('checkoutForm.required'),
    email: Yup.string()
      .email('checkoutForm.invalidEmail')
      .required('checkoutForm.required'),
    address: Yup.string().required('checkoutForm.required'),
    city: Yup.string().required('checkoutForm.required'),
    country: Yup.string().required('checkoutForm.required'),
    zipCode: Yup.string().required('checkoutForm.required'),
    phone: Yup.string().required('checkoutForm.required'),
    comment: Yup.string(),
    checkbox: Yup.string().required('checkoutForm.required'),
  })

  const onSubmit = async (values: CheckoutFormValues, { setSubmitting }) => {
    const stripe = await stripePromise

    const data: SendOrderArgsType = {
      products,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      addressDetails: values.city,
      country: values.country,
      postalCode: values.zipCode,
      phone: values.phone,
      comment: values.comment,
      vehicle: {
        model,
        engine,
        year,
        make: maker,
      },
      promoCode: code,
    }

    const { id: sessionId } = await Service.getInstance().sendOrder(data)
    setSubmitting(false)

    if (!sessionId) {
      console.error({ sessionId })
      return
    }

    // When the customer clicks on the button, redirect them to Checkout.

    const result = await stripe.redirectToCheckout({
      sessionId,
    })

    if (result.error) {
      console.error({ stripeError: result.error.message })
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }

    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2))
    //   setSubmitting(false)
    // }, 2000)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return { formik }
}
