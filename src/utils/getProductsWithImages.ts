import { graphql, useStaticQuery } from 'gatsby'
import { productIds } from '../types/product'

export const getProductsWithImages = products => {
  const { monteGT, monteGTR } = useStaticQuery(graphql`
    query {
      monteGT: file(relativePath: { eq: "monte-gt-yellow.png" }) {
        childImageSharp {
          fluid(maxWidth: 440, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
          fixed(width: 371, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      monteGTR: file(relativePath: { eq: "product-monte-gtr.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 440, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
          fixed(width: 255, quality: 100) {
            ...GatsbyImageSharpFixed
          }
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
