import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageContactUs from '../../components/containers/PageContactUs'

const ContactUs: FC<PageProps> = ({ location }) => (
  <Layout location={location} needToShowCallUs={false}>
    <SEO 
    title="Сontact us - welcome to "
    description='We are always happy to help. Email, call us or stop by during the working hours.'
     />
    <PageContactUs />
  </Layout>
)

export default ContactUs
