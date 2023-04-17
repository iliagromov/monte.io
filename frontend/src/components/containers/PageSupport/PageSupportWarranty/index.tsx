import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  faqSection,
  returnProcess,
  title,
} from '../../../../data/page-support-warranty'
import { items as menuItems } from '../../../../data/support-menu'
import AddMenu from '../../../common/AddMenu'
import FaqSection from '../../../common/Faq'
import FaqList from '../../../common/FaqList'
import {
  ReturnProccesStep,
  ReturnProcessSteps,
} from './components/ReturnProcessSteps'

type PageSupportWarrantyProps = {}

const PageSupportWarranty: FC<PageSupportWarrantyProps> = () => {
  return (
    <>
      <AddMenu mod="sticky" items={menuItems as any} />
      <div className="section pb-4">
        <div className="container">
          <h2 className="h1 text-left mb-0">
            <FormattedMessage id={title} />
          </h2>
        </div>
      </div>
      <FaqSection title={faqSection.title} smallTitle>
        <FaqList items={faqSection.items} />
      </FaqSection>
      <ReturnProcessSteps
        title={returnProcess.title}
        items={returnProcess.steps as ReturnProccesStep[]}
      />
    </>
  )
}

export default PageSupportWarranty
