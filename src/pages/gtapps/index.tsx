import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageGTApps from '../../components/containers/PageGTApps'

const GTAppsPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="GTApps" />
    <PageGTApps />
  </Layout>
)

export default GTAppsPage
