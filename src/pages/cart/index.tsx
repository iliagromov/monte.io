import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import PageCart from '../../components/containers/PageCart'

const SecondPage: FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO 
    title="Your cart"
    description='Once selected your item will appear here. Unlock full potential of your car with Monte chip tuning'
     />
    <PageCart />
  </Layout>
)

export default SecondPage
