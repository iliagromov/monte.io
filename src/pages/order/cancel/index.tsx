import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import SEO from '../../../components/common/seo'
import PageСancelPayment from '../../../components/containers/PageOrder/PageСancelPayment'
import Layout from '../../../layouts/Default/en'

const OrderCancelPage: FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Cancel Payment" />
      <PageСancelPayment />
    </Layout>
  )
}

export default OrderCancelPage
