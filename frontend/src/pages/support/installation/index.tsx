import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'

import PageSupportInstallation from '../../../components/containers/PageSupport/PageSupportInstallation'

const SupportInstallationPage: FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Simple installation" />
      <PageSupportInstallation />
    </Layout>
  )
}

export default SupportInstallationPage
