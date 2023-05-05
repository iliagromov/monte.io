import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'
import PageOurProducts from '../../../components/containers/PageOurProducts'

const IndexPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Our products" />
    <PageOurProducts />
  </Layout>
)

export default IndexPage
