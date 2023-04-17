import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PagePrivacy from '../../components/containers/PagePrivacy'

const PrivacyPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Privacy" />
    <PagePrivacy />
  </Layout>
)

export default PrivacyPage
