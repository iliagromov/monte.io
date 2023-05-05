import { graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { manualPdf as pdf } from '../../../data/page-manual'
import { Img } from '../../ui'
import './style.scss'

const PageGTApps: FC = () => {
  const intl = useIntl()
  return (
    <section className="section">
      <div className="container">
        <div
          className={cn(
            'col-md-6',
            'col-xl-12',
            'd-flex',
            'justify-content-center'
          )}
        >
          <div>
            <div className="manual-pdf">
              <h3 className="subscribe__title mb-3 mb-md-1">Read more</h3>
              <a href={intl.formatMessage({ id: pdf.src })} target="_blank">
                <img src={intl.formatMessage({ id: pdf.img })} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageGTApps
