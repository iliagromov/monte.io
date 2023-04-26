import { graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'

import './style.scss'

const PageSingleSEO: FC = () => {
  const intl = useIntl()
  return (
    <section className="section">
     <div className="container">
     PageSingleSEO
     </div>
    </section>
  )
}

export default PageSingleSEO;
