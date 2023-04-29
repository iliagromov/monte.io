import { Link, graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import './style.scss'
import { Advantages } from './components/Advantages'


import {
  advantages,
  faqSection,
  news,
  products,
} from '../../../data/page-main'
import FaqSection from '../../common/Faq'
import FaqList from '../../common/FaqList'
import { News } from '../PageMain/components/News'
import CarSelects from '../../common/CarSelects'
import Products from '../../common/Products'
import ProductsItem from '../../common/ProductsItem'
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import { useCart } from '../../../hooks/useCart'
import { Frequently } from '../PageMain/components/Frequently'



type PageSingleSEOProps = {
  postProps: {
    title: string,
    content: string
  }
}

const PageSingleSEO: FC<PageSingleSEOProps> = ({ postProps }) => {

  // console.log(postProps);

  const {
    title,
    content
  } = postProps;

  const {
    bannerImg,
    bannerImgXs,
    bannerGTChip
  } = useStaticQuery(graphql`
    query {
      bannerImg: file(relativePath: { eq: "banner-seo-section.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bannerImgXs: file(relativePath: { eq: "banner-seo-section-xs.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bannerImgSm: file(relativePath: { eq: "banner-seo-section-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bannerGTChip: file(relativePath: { eq: "bannerGTChip.png" }) {
        childImageSharp {
          fluid(maxWidth: 792, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }`);

  let sourses: FluidObject[] = [
    {
      ...bannerImgXs.childImageSharp.fluid,
      media: `(max-width: 767px)`,
    },
    {
      ...bannerImg.childImageSharp.fluid,
    },
  ]

  const { addToCart } = useCart()
  const productsWithImages = getProductsWithImages(products);

  const productGT = productsWithImages[0];

  
  return (
    <main className="page-seo ">
      <section className="banner">
        <div className="banner__img-background">
          <Img className="page-img" fluid={sourses} />
        </div>
        <div className="banner-inner-block">
          <div className="container">
            <div className="banner-inner">
              <div className="banner__text">
                <div className="banner__title">
                  Performance chip for <br/>
                  {title}
                </div>
                <div className="banner__power">
                  <div className="banner-power-item">
                    <div className="banner-power-item__title">
                      up to 20%
                    </div>
                    <div className="banner-power-item__text">
                      More Power
                    </div>
                  </div>
                  <div className="banner-power-item">
                    <div className="banner-power-item__title">
                      up to 10%
                    </div>
                    <div className="banner-power-item__text">
                      Fuel saving
                    </div>
                  </div>
                </div>
                <div className="banner__subtitle">
                  Select your car 
                </div>
               

              </div>
              <div className="banner__img">
                <Img className="page-img" fluid={bannerGTChip.childImageSharp.fluid} />
              </div>
            </div>

          </div>
        </div>


      </section>
      <section className="select-your-car">
        <div className="container">
          <CarSelects isMainPage={true} />
        </div>
      </section>
        <Advantages
            items={advantages.items as any}
            titleText={advantages.titleText}
            titleClassName="h3"
          /> 

      <Products>
        <ProductsItem
          {...productGT}
          moreLink={productGT.pageLink}
          featuresList={undefined}
          key={productGT.title}
          addToCartClick={() => addToCart(productGT.id)}
        />
      </Products>

      
      <section className='post-text post-content'>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>

     <section className='block-permalinks'>
        <div className="container">
            <div className="block-permalinks-inner">
              <h2 className='block-permalinks__title'> Monte Tuning is compatible with {title} </h2>
              <h3 className="block-permalinks__car">Hummer</h3>
              <div className="block-permalinks__links">
                  <div className="block-permalinks__links-row">
                    <div className="block-permalinks-link"> 
                        <Link className='page-link' to={'/store'}>5.7 (1997)</Link>
                    </div>
                  </div>
                  <div className="block-permalinks__links-row">
                  <div className="block-permalinks-link">
                    <Link className='page-link' to={'/store'}>6.5L V8 Diesel 1996</Link> 
                  </div>
                  <div className="block-permalinks-link"> 
                    <Link className='page-link' to={'/store'}>6.5L V8 Diesel 1997</Link> 
                  </div>
                  <div className="block-permalinks-link">  
                    <Link className='page-link' to={'/store'}>6.5L Diesel 1998</Link> 
                  </div>
                  </div>
                  <div className="block-permalinks__links-row">
                  <div className="block-permalinks-link">  
                    <Link className='page-link' to={'/store'}>6.5L V8 Turbo Diesel 1996</Link> 
                  </div>
                  <div className="block-permalinks-link">  
                    <Link className='page-link' to={'/store'}>6.5L Turbo  Diesel  1997</Link>
                  </div>
                  <div className="block-permalinks-link">  
                    <Link className='page-link' to={'/store'}>6.5L Turbo  Diesel  1998</Link>
                  </div>
                  </div>
                 
                 
              </div>
            </div>
        </div>
     
     </section>
     <Frequently/>
      <div className={cn('col-md-12', 'col-lg-12')}>
        <FaqSection title={faqSection.title} mod="pt-lg">
          <FaqList items={faqSection.items} />
        </FaqSection>
      </div>
      <News items={news.items} title={'Reviews and news'} />
    </main>
  )
}

export default PageSingleSEO;
