import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'

import PageSupportGTR from '../../../components/containers/PageSupport/PageSupportGTR'

const SupportGtrPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="GTR support" />
    <PageSupportGTR />
  </Layout>
)

export default SupportGtrPage
