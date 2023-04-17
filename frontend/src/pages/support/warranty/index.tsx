import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../../layouts/Default/en'
import SEO from '../../../components/common/seo'

import PageSupportWarranty from '../../../components/containers/PageSupport/PageSupportWarranty'

const SupportWarrantyShippingReturnPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Warranty, Shipping and Return" />
    <PageSupportWarranty />
  </Layout>
)

export default SupportWarrantyShippingReturnPage
