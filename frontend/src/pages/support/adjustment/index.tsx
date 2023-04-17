import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'

import PageSupportAdjustment from '../../../components/containers/PageSupport/PageSupportAdjustment'

const SupportGtrPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Adjustment" />
    <PageSupportAdjustment />
  </Layout>
)

export default SupportGtrPage
