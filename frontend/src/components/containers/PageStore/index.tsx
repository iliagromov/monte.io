import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import disclaimerData from '../../../data/disclaimer'
import { GainCalculator } from '../../common/GainCalculator'
import { Footnote, Section } from '../../ui'

export const PageStore: FC = () => {
  return (
    <>
      <Section mod="pt-lg" withContainer>
        <GainCalculator isStoreCalculator={true} />
      </Section>

      <Footnote withContainer className="mt-md-5 mb-5 mb-md-3">
        <FormattedMessage id={disclaimerData.text} />
      </Footnote>
    </>
  )
}

export default PageStore
