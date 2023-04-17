import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../layouts/Default/en'
import SEO from '../components/common/seo'
import PageMain from '../components/containers/PageMain/PageMain'

const IndexPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Monte Tuning" />
    <PageMain />
  </Layout>
)

export default IndexPage
