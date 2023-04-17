import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import SEO from '../../../components/common/seo'
import PageSuccessPayment from '../../../components/containers/PageOrder/PageSuccessPayment'
import Layout from '../../../layouts/Default/en'

const OrderSuccessPage: FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Payment Success " />
      <PageSuccessPayment />
    </Layout>
  )
}

export default OrderSuccessPage
