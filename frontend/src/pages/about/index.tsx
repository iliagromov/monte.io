import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../../layouts/Default/en";
import SEO from "../../components/common/seo"
import PageAbout from "../../components/containers/PageAbout";


const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>

    <SEO title="Iila Gromov" />
    <div>
      <PageAbout/>
    </div>
  </Layout>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
