import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import cn from 'classnames'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  appButtons as appButtonsProps,
  appUi as appUiProps,
  odds as oddsProps,
  performance as performanceProps,
  performanceCharts,
  product as productProps,
  productCard as productCardProps,
  reviews,
  techSpecs as techSpecsProps,
  votes,
  faqSection,
} from '../../../data/page-gt'

import './style.scss'
import { AppButtons } from '../../containers/PageMonteGT/components/AppButtons'

type TechSpecsProps = {
  title: string
  groups: {
    title: string
    info: string
  }[]
  asTableUp: 'md' | 'lg'
}

export const TechSpecs: FC<TechSpecsProps> = ({ title, groups, asTableUp }) => {
  const intl = useIntl()
  const imgMap = {
    'google-play': '/img/google-play.svg',
    'app-store': '/img/app-store.svg',
  }
  const { englishPdf, spanishPdf } = useStaticQuery(graphql`
    query {
      englishPdf: file(relativePath: { eq: "english.pdf" }) {
        publicURL
        name
      }
      spanishPdf: file(relativePath: { eq: "spanish-2.pdf" }) {
        publicURL
        name
      }
    }
  `)

  const renderGroups = groups.map(({ title, info }, i) => {
    const i18nInfo = intl.formatMessage({ id: info })

    return (
      <div
        className={cn('tech-specs__group', {
          [`tech-specs__group--table-${asTableUp}`]: asTableUp,
        })}
        key={`${i}-${title}`}
      >
        <div className="tech-specs__group-title h5">
          <FormattedMessage id={title} />
        </div>
        <div
          className="tech-specs__group-info"
          dangerouslySetInnerHTML={{ __html: i18nInfo }}
        />
      </div>
    )
  })

  return (
    <div className="tech-specs">
      <h3 className="tech-specs__title h1">
        <FormattedMessage id={title} />
      </h3>
      <div className="tech-specs__groups">
        <div className={cn('col-12')}>{renderGroups}</div>
        {/* <div className={cn('col-12', 'col-md-5')}>
          <div className="container">
            <h3 className="tech-specs__group-title h5">Product PDF manual</h3>
            <div className="download-btns-inner">
              <a
                className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
                href={englishPdf.publicURL}
                download
              >
                <span>Download Manual English</span>
              </a>
              <a
                className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
                href={spanishPdf ? spanishPdf.publicURL : ''}
                download
              >
                <span>Download Manual Española</span>
              </a>
            </div>
            <AppButtons {...appButtonsProps} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default TechSpecs
