import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import Service from '../../../../../api'
import { promo } from '../../../../../store'

export const useDiscount = () => {
  const dispatch = useDispatch()

  const formikDiscount = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      const code = values.discount

      // TODO: унести в экшн запрос вместе с dispatch(promo.actions.applyCode({ code, data: response }))

      try {
        const response = await Service.getInstance().sendPromo(code)

        // mock data for test
        // const response = {
        //   title: "discountTitle",
        //   products: [
        //     {
        //       "product": "1",
        //       "price_with_discount": "215.00"
        //     },
        //     {
        //       "product": "2",
        //       "price_with_discount": "405.00"
        //     }
        //   ]
        // }

        // setup code to store if request status = 200
        dispatch(promo.actions.applyCode({ code, data: response }))
        resetForm()
      } catch (error) {
        setErrors({ discount: error })
      }

      setSubmitting(false)
    },
  })

  return { formikDiscount }
}

const initialValues = {
  discount: '',
}
