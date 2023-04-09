import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../layouts/";
import SEO from "../components/common/seo"
import PageMain  from "../components/containers/PageMain/PageMain";


const IndexPage: React.FC<PageProps> = () => {

  return (
    <Layout>

    <SEO title="Dev" />
    <PageMain />
   
  </Layout>
  )
}

export default IndexPage;

// export const Head: HeadFC = () => <title>Home Page</title>
