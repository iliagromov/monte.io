import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { CSSProperties, FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { cartContainerData } from '../../../../../data/cart-container/index'
import { useShallowEqualSelector } from '../../../../../hooks/useShallowEqualSelector'
import { Product, productsMap } from '../../../../../types/product'
import {
  getProductById,
  getTotalDiscountSumForProductsInCart,
  getTotalPriceOfProductsInCart,
  getTotalPriceWithDiscountOfProductsInCart,
  ProductId,
} from '../../../../../utils'
import PaymentMethods, { PaymentIcon } from '../../../../common/PaymentMethods'
import { Button, Icon } from '../../../../ui'
import { DiscountForm } from './DiscountForm'
import './style.scss'
import { getProductDataById } from '../../../../../utils/getProductDataById'
import { ProductInCart } from '../../../../../store/Cart'

export type CheckoutBoxProps = {
  className?: string
  onRemoveProduct: (productId: ProductId) => void
  onCheckoutButtonClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void
  isButtonDisabled?: boolean
  paymentIcons: PaymentIcon[]
  hasPaymentMethods?: boolean
  hasRemoveProductButton?: boolean
  hasDiscountInput?: boolean
  products: ProductInCart[]
  productsData: Product[]
}

const CheckoutBox: FC<CheckoutBoxProps> = ({
  className,
  onRemoveProduct,
  onCheckoutButtonClick,
  isButtonDisabled,
  paymentIcons,
  hasPaymentMethods,
  hasRemoveProductButton,
  hasDiscountInput,
  products,
  productsData,
}) => {
  const { discountData } = useShallowEqualSelector(state => state.promo)

  const images = useStaticQuery(graphql`
    query {
      gt: file(relativePath: { eq: "gt.png" }) {
        childImageSharp {
          fixed(width: 73, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gtr: file(relativePath: { eq: "gtr.png" }) {
        childImageSharp {
          fixed(width: 73, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const renderCheckoutProduct = ({ id }) => {
    const product = getProductById(id)

    const productData = productsData?.find(p => p.id === id)
    // TODO: add status for price loading/error
    const price = productData ? `$${productData.price}.00` : `loading price`
    const img = images[productsMap[id]]
    const imgStyles: CSSProperties = {
      objectFit: 'scale-down',
    }

    return (
      <li className="checkout-box__product-wrapper" key={product.id}>
        <div className="checkout-box__product-info">
          <Img
            fixed={img.childImageSharp.fixed}
            alt={`${product.title} image`}
            imgStyle={imgStyles}
          />
          <div className="checkout-box__product-text">
            <p className="checkout-box__product-title h4">{product.title}</p>
            <p className="checkout-box__product-price">{price}</p>
          </div>
        </div>
        {hasRemoveProductButton && (
          <button
            className="checkout-box__product-remove"
            onClick={() => onRemoveProduct(product.id)}
          >
            <Icon name="cross" />
          </button>
        )}
      </li>
    )
  }
  const getTotalPriceOfProductsInCart = (products: ProductInCart[]) => {
    let totalPrice = 0
    products.forEach(product => {
      const productData = productsData?.find(p => p.id === product.id)
      // TODO: add status for price loading/error
      const productPrice = productData ? +productData.price : 0
      totalPrice += productPrice * product.count
    })
    return totalPrice
  }

  const totalSum = `$${
    discountData
      ? getTotalPriceWithDiscountOfProductsInCart(
          products,
          discountData.products
        )
      : getTotalPriceOfProductsInCart(products)
  }.00`

  return (
    <div className={cn('checkout-box', className)}>
      <ul className="checkout-box__products-list">
        {products.map(renderCheckoutProduct)}
      </ul>

      {discountData && (
        <p className="checkout-box__total mb-1">
          <span>
            <FormattedMessage id={cartContainerData.discount} />
          </span>
          {/* show discount sum if available*/}
          <span>{`-$${getTotalDiscountSumForProductsInCart(
            products,
            discountData.products
          )}.00`}</span>
        </p>
      )}

      <p className="checkout-box__total">
        <span>
          <FormattedMessage id={cartContainerData.total} />
        </span>
        {/* show total with discount if available*/}
        <b>{totalSum}</b>
      </p>

      <Button
        className={`checkout-box__button`}
        disabled={isButtonDisabled}
        onClick={onCheckoutButtonClick}
        block
      >
        <span>
          <FormattedMessage id={cartContainerData.checkoutBtn} />
        </span>
      </Button>

      {hasDiscountInput && !discountData && (
        <div className="mt-3">
          <DiscountForm />
        </div>
      )}

      {hasPaymentMethods && (
        <div className="mt-4">
          <p className="h5">We accept</p>
          <PaymentMethods icons={paymentIcons} isNarrowGapBetweenIcons />
        </div>
      )}
    </div>
  )
}

export default CheckoutBox
