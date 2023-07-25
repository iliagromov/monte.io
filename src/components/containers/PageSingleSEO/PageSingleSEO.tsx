
import cn from 'classnames'
import React, { FC } from 'react'

import './PageSingleSEO.scss'
import { Advantages } from './components/Advantages'


import {
  advantages,
  faqSection,
  news,
  products,
} from '../../../data/page-main'
import FaqSection from '../../common/Faq'
import FaqList from '../../common/FaqList'
import CarSelects from '../../common/CarSelects'
import Products from '../../common/Products'
import { getProductsWithImages } from '../../../utils/getProductsWithImages'
import { useCart } from '../../../hooks/useCart'
import { ProductsItemGT } from '../../common/ProductsItem/ProductsItemGT'
import { StaticImage } from 'gatsby-plugin-image'
import { FrequentlyComponent } from '../../common/Frequently/Frequently'
import { NewsComponent } from '../../common/News/News'
import { PermalinksSEOComponent } from '../../common/PermalinksSEO/PermalinksSEO'



type PageSingleSEOProps = {
  pageProps: {
    titleH1?: string,
    brand?: string,
    models?: []
  }
}

const PageSingleSEOContainer: FC<PageSingleSEOProps> = ({pageProps}) => {

  const {
    titleH1,
    brand
  } = pageProps;

  const keyword = titleH1;
  const keywordBrand = brand;



  const { addToCart } = useCart()
  const productsWithImages = getProductsWithImages(products);

  const productGT = productsWithImages[0];

  
  return (
    <main className="page-seo ">
      <section className="banner">
        <div className="banner__img-background">
          <StaticImage
          src="../../../assets/images/banner-seo-section.png"
          transformOptions={
            { fit: "cover", cropFocus: "attention" }
          }
          alt={'img'}
          style={{ width:"100%", height:"100%" }}
              />
        </div>
        <div className="banner-inner-block">
          <div className="container">
            <div className="banner-inner">
              <div className="banner__text">
                <h1 className="banner__title">
                  Monte Tuning for: <br/>
                  {titleH1}
                </h1>
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
              <StaticImage
                 src="../../../assets/images/bannerGTChip.png"
                alt={'img'}
              />
               
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
        <ProductsItemGT
          {...productGT}
          moreLink={productGT.pageLink}
          featuresList={undefined}
          key={productGT.title}
          addToCartClick={() => addToCart(productGT.id)}
        />
      </Products>

      
      <section className='post-text post-content'>
          <div className="container">
            The Monte GT <strong>{keyword}</strong> is an OBD2 performance chip that offers six driving modes, app control, and a lifetime warranty. Made in the USA, this chip is safe for your car's warranty and is designed to improve the performance of your <strong>{keywordBrand}</strong> vehicle. Whether you're looking for increased horsepower, better fuel economy, or improved overall performance, the Monte GT has you covered and yours <strong>{keyword}</strong>.
            One of the standout features of the Monte GT is its six driving modes, which allow you to customize your car's performance to suit your needs. Whether you're looking for a sportier driving experience or better fuel efficiency, the Monte GT can adapt to your preferences. And with the ability to control the chip using an app, you can make adjustments on the fly.
            Another major benefit of the Monte GT is its lifetime warranty. This chip is built to last, and the manufacturer stands behind its product. This means you can enjoy the benefits of improved performance without having to worry about costly repairs or replacements.
            When it comes to performance chips for <strong>{keywordBrand}</strong> cars, the Monte GT is a top choice. With its advanced technology, customizable settings, and lifetime warranty, it's no wonder why car enthusiasts are making the switch to Monte GT. Upgrade your <strong>{keyword}</strong> with the Monte GT performance chip and experience the difference in performance and driving sensation today."
          </div>
        </section>

     <PermalinksSEOComponent
      permalinks={pageProps}
     />

     <FrequentlyComponent/>
      <div className={cn('col-md-12', 'col-lg-12')}>
        <FaqSection title={faqSection.title} mod="pt-lg">
          <FaqList items={faqSection.items} />
        </FaqSection>
      </div>
      <NewsComponent  />
    </main>
  )
}

export {PageSingleSEOContainer};
