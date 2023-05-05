import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageReviews from '../../components/containers/PageReviews'

const NewsPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Manual" />
    <PageReviews />
  </Layout>
)

export default NewsPage
