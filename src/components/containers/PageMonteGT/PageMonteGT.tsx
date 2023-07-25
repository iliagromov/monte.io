import React, { FC } from 'react'
import {
  faqSection,
} from '../../../data/page-gt'
import { items as productsMenu } from '../../../data/products-menu'
import AddMenu from '../../common/AddMenu'

import { BannerGTComponent } from '../../common/BannerGT/BannerGT'
import { AppUiComponent } from '../../common/AppUi/AppUi'
import { PerformanceGTComponent } from '../../common/PerformanceGT/PerformanceGT'
import { SliderGTComponent } from '../../common/SliderGT/SliderGT'
import { AdvantagesGTComponent } from '../../common/AdvantagesGT/AdvantagesGT'
import { TechSpecsGTComponent } from '../../common/TechSpecsGT/TechSpecsGT'
import { Footnote, notification } from '../../ui'
import FaqSection from '../../common/Faq'
import FaqList from '../../common/FaqList'

import './PageMonteGT.scss'

type PageMonteGTProps = {}

const PageMonteGTContainer: FC<PageMonteGTProps> = () => {
 

  return (
    <>
      <section className={"section pageGT"}>
        <AddMenu items={productsMenu as any} mod="absolute" />

        <BannerGTComponent />

        <AppUiComponent />

        <PerformanceGTComponent />
        <SliderGTComponent />

        <AdvantagesGTComponent />

        <TechSpecsGTComponent />

        <FaqSection title={faqSection.title} mod="pt-lg">
          <FaqList items={faqSection.items} />
        </FaqSection>

      </section>
      <Footnote withContainer>
        **Real world gains may be less or more depending on a large number of
        contributing factors. Please note for the full adjustment it is
        necessary to drive 120 miles after each mode change. You can learn more
        about the adjustment in the Support Section.
      </Footnote>
    </>
  )
}

export {PageMonteGTContainer}
