import cn from 'classnames'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import CarSelects from '../../../../common/CarSelects'
import { PaymentIcon } from '../../../../common/PaymentMethods'
import { Button, Heading, Icon, notification } from '../../../../ui'
import CheckoutBox from '../CheckoutBox'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartModal } from './CartModal'
import { CartProductsList } from './CartProductsList'
import './style.scss'
import { useCart } from './useCart'
import { cartStates } from './useCartState'
import './style.scss'

type CartContainerProps = {
  title: string
  subtitle: string
  buttonChangeCar: string
  className?: string
  titleCheckout: string
  backButton: string
  paymentIcons: PaymentIcon[]
}

const CartContainer: FC<CartContainerProps> = ({
  title,
  subtitle,
  buttonChangeCar,
  className,
  titleCheckout,
  backButton,
  paymentIcons,
}) => {
  const {
    isModalShowed,
    openModal,
    closeModal,
    removeProduct,
    incrementItem,
    decrementItem,
    cartState,
    goToCheckout,
    goToProducts,
    formik,
    setIsCarSelected,
    isCarSelected,
    maker,
    model,
    engine,
    year,
    productsInCart,
    productsData,
  } = useCart()

  const renderCartHeader = () => {
    switch (cartState) {
      default:
      case cartStates.products:
        return (
          <>
            <Heading tag="h2" like="h1">
              <FormattedMessage id={title} />
            </Heading>

            {isCarSelected ? (
              <>
                <p className="h4 mb-2">
                  <FormattedMessage id={subtitle} />
                  {` ${maker} ${model}, ${engine}, ${year}`}
                </p>

                <Button
                  type="text"
                  className="cart-container__header-btn"
                  icon={<Icon name="sync" className="mr-2" />}
                  onClick={() => setIsCarSelected(false)}
                >
                  <FormattedMessage id={buttonChangeCar} />
                </Button>
              </>
            ) : (
              <>
                <CarSelects />
              </>
            )}
          </>
        )

      case cartStates.checkout:
        return (
          <>
            <Button
              className="d-block cart-container__back-button-wrapper mb-5"
              type="link"
              onClick={goToProducts}
            >
              <span className="d-flex align-items-center">
                <Icon
                  name="arrow-forward"
                  className="cart-container__back-button-arrow-icon"
                />
                <FormattedMessage id={backButton} />
              </span>
            </Button>
            <h2 className="h1">
              <FormattedMessage id={titleCheckout} />
            </h2>
          </>
        )
    }
  }

  const renderCartContent = () => {
    switch (cartState) {
      default:
      case cartStates.products:
        return (
          <CartProductsList
            products={productsInCart}
            productsData={productsData}
            onAddItem={incrementItem}
            onRemoveItem={decrementItem}
          />
        )
      case cartStates.checkout:
        return <CheckoutForm formik={formik} />
    }
  }

  const isCheckoutState = cartState === cartStates.checkout

  const onCheckoutButtonClick = () => {
    const isAllSelectsSelected = !!(maker && model && engine && year)
    const errorMessage = isAllSelectsSelected
      ? 'Please confirm the selected car'
      : 'Please select a car first'

    if (!isCarSelected) {
      notification['error']({
        message: errorMessage,
        duration: 2,
        placement: 'bottomRight',
      })
      return
    }
    isCheckoutState ? formik.submitForm() : goToCheckout()
  }

  return (
    <>
      <section className={cn('section', 'cart-container', className)}>
        <div className="container">
          <div className="cart-container__header text-center">
            {renderCartHeader()}
          </div>
          <div className="row">
            <div className="col-xl">{renderCartContent()}</div>
            <div className="col-xl-auto cart-container__checkout-col">
              <CheckoutBox
                products={productsInCart}
                productsData={productsData}
                className="position-sticky cart-container__checkout"
                onCheckoutButtonClick={onCheckoutButtonClick}
                isButtonDisabled={formik.isSubmitting}
                onRemoveProduct={openModal}
                paymentIcons={paymentIcons}
                hasPaymentMethods={isCheckoutState}
                hasRemoveProductButton={!isCheckoutState}
                hasDiscountInput={isCheckoutState}
              />
            </div>
          </div>
        </div>
      </section>

      <CartModal
        isModalShowed={isModalShowed}
        onCloseModal={closeModal}
        onRemoveProduct={removeProduct}
      />
    </>
  )
}

export default CartContainer
