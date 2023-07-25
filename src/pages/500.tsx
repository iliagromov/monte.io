import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import SEO from '../components/common/seo'
import Page500 from '../components/containers/Page500'
import Layout from '../layouts/Default/en'


const NotFoundPage: FC<PageProps> = ({ location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="500: Internal Server Error" />
      <Page500 />
    </Layout>
  )
}

export default NotFoundPage
