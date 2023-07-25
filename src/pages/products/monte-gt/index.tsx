import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'
import { PageMonteGTContainer } from '../../../components/containers/PageMonteGT/PageMonteGT'

const IndexPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Monte GT" />
    <PageMonteGTContainer />
  </Layout>
)

export default IndexPage
