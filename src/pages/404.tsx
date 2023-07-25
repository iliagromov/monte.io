import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import SEO from '../components/common/seo'
import Page404 from '../components/containers/Page404'
import Layout from '../layouts/Default/en'


const NotFoundPage: FC<PageProps> = ({ location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="404: Not found" />
      <Page404 />
    </Layout>
  )
}

export default NotFoundPage
