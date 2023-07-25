import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import cn from 'classnames'
import { FormattedMessage, useIntl } from 'react-intl'

import './style.scss'
type TechSpecsProps = {
  title: string
  groups: {
    title: string
    info: string
  }[]
  asTableUp: 'md' | 'lg'
}

export const TechSpecs: FC<TechSpecsProps> = ({ title, groups, asTableUp }) => {
  const intl = useIntl();

    const englishPdf = 'https://drive.google.com/file/d/1axNmrT79F4mclbWuxqPBb6WvJbTgfYsY/view?usp=drive_link';
    const spanishPdf = 'https://drive.google.com/file/d/1H_cmZffDPdu4N9TjWZE-eSz1rzfAkqN8/view';

  

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
        <div className={cn('col-12')}>
          {renderGroups}
          <div className="tech-specs__group tech-specs__group--table-md">
            <h3 className="tech-specs__group-title h5">Product PDF manual</h3>
            <div className="tech-specs__group-info">
            <div className="download-btns-inner">
              <a
                className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
                href={englishPdf}
                download
                target='_blank'
              >
                <span>Download Manual English</span>
              </a>
              <a
                className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg ant-btn-custom download-btns__btn"
                href={spanishPdf}
                download
                target='_blank'
              >
                <span>Download Manual Española</span>
              </a>
            </div>
            </div>
            
          </div>
              
          
          </div>
      </div>
    </div>
  )
}

export default TechSpecs
