import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageReviewsContainer from '../../components/containers/PageReviews/PageReviews'

const NewsPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Reviews" />
    <PageReviewsContainer />
  </Layout>
)

export default NewsPage
