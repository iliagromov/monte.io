import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { faqSection, title } from '../../../../data/page-support-adjustment'
import { items as menuItems } from '../../../../data/support-menu'
import AddMenu from '../../../common/AddMenu'
import FaqSection from '../../../common/Faq'
import FaqList from '../../../common/FaqList'

type PageSupportWarrantyProps = {}

const PageSupportWarranty: FC<PageSupportWarrantyProps> = () => {
  return (
    <>
      <AddMenu mod="sticky" items={menuItems as any} />

      <FaqSection title={faqSection.title} smallTitle>
        <FaqList items={faqSection.items} />
      </FaqSection>
    </>
  )
}

export default PageSupportWarranty
