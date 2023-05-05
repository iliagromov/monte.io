import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'
import PageMonteGT from '../../../components/containers/PageMonteGT'

const IndexPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Monte GT" />
    <PageMonteGT />
  </Layout>
)

export default IndexPage
