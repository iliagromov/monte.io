import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageManual from '../../components/containers/PageManual'

const GTAppsPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Manual" />
    <PageManual />
  </Layout>
)

export default GTAppsPage
