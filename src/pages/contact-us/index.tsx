import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageContactUs from '../../components/containers/PageContactUs'

const ContactUs: FC<PageProps> = ({ location }) => (
  <Layout location={location} needToShowCallUs={false}>
    <SEO title="Contact us" />
    <PageContactUs />
  </Layout>
)

export default ContactUs
