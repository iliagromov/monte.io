import cn from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { cartContainerData } from '../../../../../data/cart-container'
import { Product, productsMap } from '../../../../../types/product'
import { getProductDataById, ProductId } from '../../../../../utils'
import { Icon } from '../../../../ui'

import { ProductInCart } from '../../../../../store/Cart'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type CartProductsListProps = {
  onAddItem: (productId: ProductId) => void
  onRemoveItem: (productId: ProductId) => void
  products: ProductInCart[]
  productsData: Product[]
}

export const CartProductsList: FC<CartProductsListProps> = ({
  onAddItem,
  onRemoveItem,
  products,
  productsData,
}) => {
  const images = useStaticQuery(graphql`
    query {
      gt: file(relativePath: { eq: "gt.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED 
            transformOptions: {fit: CONTAIN}
            )
          
        }
      }
      gtr: file(relativePath: { eq: "gtr.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED )
        }
      }
    }
  `)

  const renderProduct = ({ id, count }) => {
    const product = getProductDataById(id)
    const img = images[productsMap[id]]
    const productData = productsData?.find(p => p.id === id)
    // TODO: add status for price loading/error
    const price = productData
      ? `$${productData.price * count}.00`
      : `loading price`;

    
  const imgNewsMonteGT1Src = getImage(img)
    return (
      <li
        className="cart-product cart-container__products-item"
        key={product.id}
      >
        <div className="cart-product__image-wrapper">
          
          <GatsbyImage
                className="page-img" 
                image={imgNewsMonteGT1Src}
                alt={`${product.title} image`}
                />
        </div>
        <div className="cart-product__content">
          <h2 className={cn('cart-product__title')}>{product.title}</h2>
          <div className="cart-product__property">
            <span>
              <FormattedMessage id={cartContainerData.productCountText} />
            </span>
            <div className="cart-product__property-controls">
              <button
                className="cart-product__btn"
                onClick={() => onRemoveItem(product.id)}
              >
                <Icon name="minus" />
              </button>
              <span className="cart-product__count">{count}</span>
              <button
                className="cart-product__btn"
                onClick={() => onAddItem(product.id)}
              >
                <Icon name="plus" />
              </button>
            </div>
          </div>
          <div className="cart-product__property">
            <span>
              <FormattedMessage id={cartContainerData.total} />
            </span>
            <b>{price}</b>
          </div>
        </div>
      </li>
    )
  }

  return (
    <ul className="cart-container__products-list">
      {products.map(renderProduct)}
    </ul>
  )
}
