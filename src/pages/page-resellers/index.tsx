import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageResellers from '../../components/containers/PageResellers'

const ContactUs: FC<PageProps> = ({ location }) => (
  <Layout location={location} needToShowCallUs={false}>
    <SEO title="Authorized Resellers" />
    <PageResellers />
  </Layout>
)

export default ContactUs
