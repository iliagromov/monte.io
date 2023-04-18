import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'
import PageComponent from '../../../components/containers/PageMonteGTR'

const IndexPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Monte GTR" />
    <PageComponent />
  </Layout>
)

export default IndexPage
