
import React, { FC } from 'react'
import { IntlShape } from 'react-intl'

import { BannerComponent } from '../../common/Banner/Banner';
import { ProductAboutComponent } from '../../common/ProductAbout/ProductAbout';
import { AdvantagesComponent } from '../../common/Advantages/Advantages';
import { ReviewBlockComponent } from '../../common/ReviewBlock/ReviewBlock';
import { NewsComponent } from '../../common/News/News';
import { FeaturedComponent } from '../../common/Featured/Featured';
import { CertificateBlockComponent } from '../../common/CertificateBlock/CertificateBlock';
import { FrequentlyComponent } from '../../common/Frequently/Frequently';
import { ProductsMainComponent } from '../../common/ProductsMain/ProductsMain';
import { FaqSectionMainComponent } from '../../common/FaqSectionMain/FaqSectionMain';


import './PageMain.scss';

type PageMainProps = {
  intl: IntlShape
  titleH1?: string
}

const PageMainConteiner: FC<PageMainProps> = () => {

  return (
    <main className="page-main">
      <BannerComponent />
      <ProductAboutComponent />
      <AdvantagesComponent />
      <ProductsMainComponent />
      <ReviewBlockComponent />
      <NewsComponent />
      <FeaturedComponent />
      <CertificateBlockComponent />
      <FrequentlyComponent />
      <FaqSectionMainComponent />
    </main>
  )
}
export { PageMainConteiner };
