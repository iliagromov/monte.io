import React, { FC, useCallback } from 'react'
import { headingBlock, sections } from '../../../data/page-privacy'
import { FormattedMessage, useIntl } from 'react-intl'
import { NavigationBackButton, Section, Heading } from '../../ui'
import { navigate } from '@reach/router'

import './style.scss'

type PagePrivacyProps = {}

const PagePrivacy: FC<PagePrivacyProps> = () => {
  const intl = useIntl()
  const blockName = 'privacy'

  const renderParagraphs = useCallback(
    (paragraphs: string[]) =>
      paragraphs.map((text, index) => {
        const i18nText = intl.formatMessage({ id: text })
        return (
          <p dangerouslySetInnerHTML={{ __html: i18nText }} key={index}></p>
        )
      }),
    []
  )

  const renderSections = sections.map(({ title, paragraphs }, index) => (
    <section className={`${blockName}__section-item`} key={index}>
      <Heading tag="h3" className={`${blockName}__block-title mb-5`}>
        <FormattedMessage id={title} />
      </Heading>
      {renderParagraphs(paragraphs)}
    </section>
  ))

  const goBack = () => navigate(-1)

  return (
    <>
      <Section className={`${blockName} pt-5 mb-5`}>
        <div className={`container ${blockName}__back-button-wrap`}>
          <NavigationBackButton onClick={goBack} />
        </div>

        <div className={`container ${blockName}__container`}>
          <section className={`${blockName}__section-item`}>
            <Heading tag="h1" className="col-lg-8 px-0 mb-4">
              <FormattedMessage id={headingBlock.title} />
            </Heading>

            <div className={`${blockName}__addresses`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: headingBlock.webAddress }),
                }}
              />
              <div>
                <FormattedMessage id={headingBlock.address} />
              </div>
            </div>

            {renderParagraphs(headingBlock.paragraphs)}
          </section>

          {renderSections}
        </div>
      </Section>
    </>
  )
}

export default PagePrivacy
