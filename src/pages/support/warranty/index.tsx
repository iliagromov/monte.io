import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'

import PageSupportWarranty from '../../../components/containers/PageSupport/PageSupportWarranty'

const SupportWarrantyShippingReturnPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO 
    title="Consumer Product Warranty "
    description='Everything about product warranty from Monte Tuning for the chip tuning products of your Monte Tuning performance chip tuning'
     />
    <PageSupportWarranty />
  </Layout>
)

export default SupportWarrantyShippingReturnPage
