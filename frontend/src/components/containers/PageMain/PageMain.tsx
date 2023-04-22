

const { productIds } = require('../../../types/product')
import React, { FC } from 'react'
import { FormattedMessage, IntlShape } from 'react-intl'
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from 'gatsby-image'

// components
import { Hero } from './components/Hero'
import CarSelects from '../../common/CarSelects'
import { Footnote, Heading, Section } from '../../ui'
import { Video } from '../../common/Video'
import { Advantages } from './components/Advantages'
import Products from '../../common/Products'
import ProductsItem from '../../common/ProductsItem'
import Edge from './components/Edge'
import FaqSection from '../../common/Faq'
import { News } from './components/News'
import FaqList from '../../common/FaqList'


// hooks
import { useCart } from '../../../hooks/useCart'
// utils
import { getProductsWithImages } from '../../../utils/getProductsWithImages'

// data
import {
  advantages,
  edge,
  faqSection,
  hero,
  news,
  products,
  programmer as programmerProps,
  installVideo,
} from '../../../data/page-main'

type PageMainProps = {
  intl: IntlShape
}

import './style.scss'


const PageMain: FC<PageMainProps> = () => {

  // const { allWpPage } = useStaticQuery(graphql`{
  //         allWpPage {
  //           nodes {
  //             id
  //             slug
  //             uri
  //             title
  //             content
  //           }
  //         }
  //       }
  // `);
  // const allPages = allWpPage.nodes.map((node:any) => (
  //   <div key={node.slug}>
  //     <Link to={node.uri}>
  //       <h2>{node.title}</h2>
  //     </Link>
  //     <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
  //   </div>
  // ));
  // console.log(allWpPost);


  const {
    heroImgBgLg,
    heroImgBgMd,
    heroImgBgSm,
    heroImgBg,
    heroImgProduct,
    installVideoPreview,
  } = useStaticQuery(graphql`
    query {
      chipAndNotebook: file(
        relativePath: { eq: "chip-and-notebook-main-md.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 992, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImgBg: file(relativePath: { eq: "color-cloud.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      heroImgProduct: file(relativePath: { eq: "hero-gt-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 659, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      heroImgBgLg: file(relativePath: { eq: "img-banner-md.png" }) {
        childImageSharp {
          fluid(maxWidth: 992, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      heroImgBgMd: file(relativePath: { eq: "img-banner-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      heroImgBgSm: file(relativePath: { eq: "img-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 567, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      installVideoPreview: file(
        relativePath: { eq: "installVideoPreview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1040, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { addToCart } = useCart()
  const productsWithImages = getProductsWithImages(products)
  const productGT = productsWithImages.find((pr: any) => pr.id == productIds.gt)

  const renderedInstallVideo = (
    <Section withContainer>
      <Video
        youTubeId={installVideo.youTubeId}
        preview={installVideoPreview.childImageSharp.fluid}
        imgStyle={{
          objectPosition: 'left center',
        }}
      />
    </Section>
  )
  return (
    <>
      <Hero
        title={hero.title}
        imgOne={heroImgBg.childImageSharp.fluid}
        imgTwo={heroImgProduct.childImageSharp.fluid}
      >
        <CarSelects isMainPage={true} />
      </Hero>
      <Advantages
        items={advantages.items as any}
        titleText={advantages.titleText}
        titleClassName="h3"
      />

      {false && (
        <div className="container">
          <CarSelects isMainPage={true} />
          <div className="car-celects-after">
            <h1 className="h2 mx-auto text-center">
              <FormattedMessage id={hero.subtitle} />
            </h1>
            <div className="car-celects-after__description">
              <FormattedMessage id={hero.description} />
            </div>
          </div>
        </div>
      )}


      <Products>
        <ProductsItem
          {...productGT}
          moreLink={productGT.pageLink}
          featuresList={undefined}
          key={productGT.title}
          addToCartClick={() => addToCart(productGT.id)}
        />
      </Products>

      {renderedInstallVideo}
      
      <Edge items={edge.items as any} />


      <FaqSection title={faqSection.title} mod="pt-lg">
        <FaqList items={faqSection.items} />
      </FaqSection>

      <News items={news.items} title={news.title} />

      <Footnote withContainer>
        **Real world gains may be less or more depending on a large number of
        contributing factors. Please note for the full adjustment it is
        necessary to drive 120 miles after each mode change. You can learn more
        about the adjustment in the Support Section.
      </Footnote>


    </>
  )
}
export default PageMain;
