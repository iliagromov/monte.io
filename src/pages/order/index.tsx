import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import { Redirect } from '../../components/common/Redirect'
import SEO from '../../components/common/seo'
import PageSuccessPayment from '../../components/containers/PageOrder/PageSuccessPayment'
import { SUPPORT_INSTALLATION } from '../../data/routes'
import Layout from '../../layouts/Default/en'

const OrderPage: FC<PageProps> = ({ location }) => {
  if (location.pathname.includes('installation')) {
    // console.log({ location, text: 'redirect to installation' })
    return <Redirect path={SUPPORT_INSTALLATION} />
  } else {
    // console.log({ location, text: 'without redirect' })
  }

  return (
    <Layout location={location}>
      <SEO title="Order" />
      <PageSuccessPayment />
    </Layout>
  )
}

export default OrderPage
