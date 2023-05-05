import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageCart from '../../components/containers/PageCart'

const SecondPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Your cart" />
    <PageCart />
  </Layout>
)

export default SecondPage
