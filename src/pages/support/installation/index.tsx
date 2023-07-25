import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'

import PageSupportInstallation from '../../../components/containers/PageSupport/PageSupportInstallation'

const SupportInstallationPage: FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO 
      title="Chip tuning installation - What you need to know about the installation"
      description='Simple Plug and Play installation. Everything you need to know about the installation of your Monte Tuning performance chip tuning'
       />
      <PageSupportInstallation />
    </Layout>
  )
}

export default SupportInstallationPage
