import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'
import { PageMonteGTRContainer } from '../../../components/containers/PageMonteGTR/PageMonteGTR'

const IndexPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Monte GTR" />
    <PageMonteGTRContainer />
  </Layout>
)

export default IndexPage
