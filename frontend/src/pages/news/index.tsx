import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageSingleNews from '../../components/containers/PageSingleNews'

const NewsPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Manual" />
    <PageSingleNews />
  </Layout>
)

export default NewsPage
