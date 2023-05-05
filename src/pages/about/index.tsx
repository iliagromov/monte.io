import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageAbout from '../../components/containers/PageAbout'

const Page: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Our products" />
    <PageAbout />
  </Layout>
)

export default Page
