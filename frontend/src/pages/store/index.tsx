import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageStore from '../../components/containers/PageStore'

const SecondPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Store" />
    <PageStore />
  </Layout>
)

export default SecondPage
