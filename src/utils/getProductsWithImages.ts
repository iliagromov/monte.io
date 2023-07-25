import { graphql, useStaticQuery } from 'gatsby'
import { productIds } from '../types/product'

export const getProductsWithImages = products => {
  const { monteGT, monteGTR } = useStaticQuery(graphql`
    query {
      monteGT: file(relativePath: { eq: "monte-gt-yellow.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED  )
        }
      }
      monteGTR: file(relativePath: { eq: "product-monte-gtr.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED  )
        }
      }
    }
  `)

  return products.map(product => {
    if (product.id === productIds.gt) {
      product.img = monteGT
    } else if (product.id === productIds.gtr) {
      product.img = monteGTR
    }
    return product
  })
}
