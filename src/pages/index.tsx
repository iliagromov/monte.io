import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../layouts/Default/en'
import SEO from '../components/common/seo'
import PageMain from '../components/containers/PageMain'

const IndexPage: FC<PageProps> = ({ location }) => {
  const title = 'Monte Tuning - Performance chip tuning - Chip Your Car';
  const description = '"Engine Tuning via smartphone tuning. Enjoy up to 20% more power. Save up to 10% on fuel. Unlock full potential of your car with Monte chip tuning"'
  const Canonical = 'https://montetuning.com/';
  
  return (
  <Layout location={location}>
    <SEO 
    title={title}
    description={description}
    isCanonical={true}
    linkCanonical={Canonical}
     />
    <PageMain />
  </Layout>
)
}

export default IndexPage
