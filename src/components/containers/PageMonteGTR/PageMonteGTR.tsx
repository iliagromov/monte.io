
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import disclaimerData from '../../../data/disclaimer'
import {
  faqSection,
  performance as performanceProps,
} from '../../../data/page-gtr'
import { items as productsMenu } from '../../../data/products-menu'

import AddMenu from '../../common/AddMenu'
import Performance from '../../common/Performance'
import { BannerGTRComponent } from '../../common/BannerGTR/BannerGTR'
import { BoostGTRComponent } from '../../common/BoostGTR/BoostGTR'
import { ChipUiGTRComponent } from '../../common/ChipUiGTR/ChipUiGTR'
import { PromoVideoComponent } from '../../common/PromoVideo/PromoVideo'
import { InstallVideoComponent } from '../../common/InstallVideo/InstallVideo'
import { InstallationStepsComponent } from '../../common/InstallationSteps/InstallationSteps'
import { ProgrammerGTRComponent } from '../../common/ProgrammerGTR/ProgrammerGTR'
import { TechSpecsGTRComponent } from '../../common/TechSpecsGTR/TechSpecsGTR'
import { AdvantagesGTRComponent } from '../../common/AdvantagesGTR/AdvantagesGTR'
import { DynoSectionGTRComponent } from '../../common/DynoSectionGTR/DynoSectionGTR'
import { Footnote, Heading, Section } from '../../ui'

import FaqList from '../../common/FaqList'
import { GTRChartsComponent } from '../../common/GTRCharts/GTRCharts'
import { ExpositionGTRComponent } from '../../common/ExpositionGTR/ExpositionGTR'

import './PageMonteGTR.scss'


type PageMonteGTProps = {}

const PageMonteGTRContainer: FC<PageMonteGTProps> = () => {





  return (
    <>
      <section className={"section pageGTR"}>

      <AddMenu items={productsMenu as any} mod="absolute" />
      <BannerGTRComponent/>
      <BoostGTRComponent/>
      {/* <ChipUiGTRComponent/> */}

      <PromoVideoComponent/>
      
      <DynoSectionGTRComponent/>
      <Performance
        {...performanceProps}
      />

      <GTRChartsComponent/>
      <ExpositionGTRComponent/>

      <InstallationStepsComponent/>
      <InstallVideoComponent/>

      <ProgrammerGTRComponent/>

      <AdvantagesGTRComponent/>
      <TechSpecsGTRComponent/>

      <Section withContainer>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <Heading tag="h2" like="h1" className="text-center mb-5">
                <FormattedMessage id={faqSection.title} />
              </Heading>

              <FaqList items={faqSection.items} />
            </div>
          </div>
      </Section>

      </section>

      <Footnote withContainer className="my-5">
        <FormattedMessage id={disclaimerData.text} />
      </Footnote>
    </>
  )
}

export { PageMonteGTRContainer}
