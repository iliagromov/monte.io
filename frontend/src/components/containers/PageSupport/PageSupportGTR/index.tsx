import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import { navigationElements } from '../../../../data/page-support-gtr'
import { items as menuItems } from '../../../../data/support-menu'
import AddMenu from '../../../common/AddMenu'
import FaqSection from '../../../common/Faq'
import FaqList from '../../../common/FaqList'
import { ScrollNav } from './components/ScrollNav'

type SupportGTRPageProps = {}

const SupportGtrPage: FC<SupportGTRPageProps> = () => {
  const renderFaqs = navigationElements.map(({ key, sectionData, title }) => (
    <Element id={key} key={key} name={title}>
      <FaqSection title={sectionData.title} smallTitle>
        <FaqList items={sectionData.items} />
      </FaqSection>
    </Element>
  ))

  return (
    <>
      <AddMenu mod="sticky" items={menuItems as any} />
      <div className="section pb-4">
        <div className="container">
          <h2 className="h1 text-left mb-0">
            <FormattedMessage id="pageSupportGTR.monteGTRSupport" />
          </h2>
        </div>
      </div>
      <ScrollNav elements={navigationElements} />
      {renderFaqs}
    </>
  )
}

export default SupportGtrPage
