import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import { Redirect } from '../../components/common/Redirect'
import SEO from '../../components/common/seo'
import Page404 from '../../components/containers/Page404'
import { SUPPORT_INSTALLATION } from '../../data/routes'
import Layout from '../../layouts/Default/en'

const NotFoundPage: FC<PageProps> = ({ location }) => {
  if (location.pathname.includes('installation')) {
    console.log({ location, text: 'redirect to installation' })
    return <Redirect path={SUPPORT_INSTALLATION} />
  } else {
    console.log({ location, text: 'without redirect' })
  }

  return (
    <Layout location={location}>
      <SEO title="404: Not found" />
      <Page404 />
    </Layout>
  )
}

export default NotFoundPage
