import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import AddMenu from '../../common/AddMenu'
import Products from '../../common/Products'
import ProductsItem from '../../common/ProductsItem'
import { Footnote } from '../../ui'
import { title, products, hint } from '../../../data/page-chips-compare'
import { items as productsMenu } from '../../../data/products-menu'
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import { useCart } from '../../../hooks/useCart'

type PageChipsCompareProps = {}

const PageChipsCompare: FC<PageChipsCompareProps> = () => {
  const { addToCart } = useCart()
  const productsWithImages = getProductsWithImages(products)

  return (
    <>
      <AddMenu items={productsMenu as any} />

      <Products title={title} className="section--pt-lg">
        {productsWithImages.map(product => (
          <ProductsItem
            {...product}
            key={product.title}
            addToCartClick={() => addToCart(product.id)}
          />
        ))}
      </Products>

      <Footnote withContainer className="mb-5 mt-4 mt-lg-5 pt-lg-4">
        <FormattedMessage id={hint} />
      </Footnote>
    </>
  )
}

export default PageChipsCompare
