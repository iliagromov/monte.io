import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageArchiveNews from '../../components/containers/PageArchiveNews'

const NewsPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Manual" />
    <PageArchiveNews />
  </Layout>
)

export default NewsPage
