import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { items as aboutMenu } from '../../../data/about-menu'
import {
  compareProducts,
  features,
  productsExtendedInfo,
  promo,
} from '../../../data/page-about-our-products'
import { useCart } from '../../../hooks/useCart'
import { productIds } from '../../../types/product'
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import AddMenu from '../../common/AddMenu'
import Products from '../../common/Products'
import ProductsItem from '../../common/ProductsItem'
import { AdvantagesType } from './components/ProductImageAndInfo'
import ProductInfoSection from './components/ProductInfoSection'
import {
  FeatureItemType,
  ProductsFeaturesList,
} from './components/ProductsFeaturesList'
import { TuningPromo } from './components/TuningPromo'
import { getProductDataById } from '../../../utils/getProductDataById'

type PageOurProductsProps = {}

const PageOurProducts: FC<PageOurProductsProps> = () => {
  const {
    promoImageSm,
    promoImageMd,
    promoImageLg,
    gtImage,
    gtrImage,
  } = useStaticQuery(graphql`
    query {
      gtrImage: file(relativePath: { eq: "gtr-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 269) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      gtImage: file(relativePath: { eq: "gt-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 222) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      promoImageLg: file(relativePath: { eq: "tuning-promo-lg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1038) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      promoImageMd: file(relativePath: { eq: "tuning-promo-md.png" }) {
        childImageSharp {
          fluid(maxWidth: 718) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      promoImageSm: file(relativePath: { eq: "tuning-promo-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const { addToCart } = useCart()

  let sourses: FluidObject[] = [
    {
      ...promoImageLg.childImageSharp.fluid,
      media: `(min-width: 992px)`,
    },
    {
      ...promoImageSm.childImageSharp.fluid,
      media: `(max-width: 767px)`,
    },
    {
      ...promoImageMd.childImageSharp.fluid,
      media: `(max-width: 992px)`,
    },
  ]

  const productsWithImages = getProductsWithImages(compareProducts.products)

  const renderProducts = productsExtendedInfo
    .map(({ id, power, fuelSaving, title, descr, advantages }) => {
      const productData = getProductDataById(id)
      // TODO: add status for price loading/error
      const productPrice = productData?.price || 0
      const isGT = id === productIds.gt
      return (
        <div className="mt-4 mt-lg-5" key={id}>
          <ProductInfoSection
            productImage={
              isGT
                ? gtImage.childImageSharp.fluid
                : gtrImage.childImageSharp.fluid
            }
            power={power}
            fuelSaving={fuelSaving}
            advantages={advantages as AdvantagesType[]}
            title={title}
            description={descr}
            price={productPrice}
          />
        </div>
      )
    })
    .reverse()

  return (
    <>
      <AddMenu items={aboutMenu as any} />
      <TuningPromo
        heading={promo.heading}
        text={promo.text}
        imgSourses={sourses}
      />
      <ProductsFeaturesList features={features as FeatureItemType[]} />
      <section className="section">
        <div className="container container--wide">
          <div className="mt-n4 mt-lg-n5 mx-n3 mx-md-0">{renderProducts}</div>
        </div>
      </section>
      <Products title={compareProducts.title} className="section--py-lg">
        {productsWithImages.map(product => (
          <ProductsItem
            {...product}
            key={product.title}
            addToCartClick={() => addToCart(product.id)}
          />
        ))}
      </Products>
    </>
  )
}

export default PageOurProducts
