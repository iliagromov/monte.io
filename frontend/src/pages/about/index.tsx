import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../../layouts/";
import SEO from "../../components/common/seo"
import PageMain  from "../../components/containers/PageMain/PageMain";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>

    <SEO title="Iila Gromov" />
    <PageMain />
   
  </Layout>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
