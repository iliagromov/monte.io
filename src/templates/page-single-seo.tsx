import React from "react";
import Layout from "../layouts/Default/en";
import { PageSingleSEOContainer } from "../components/containers/PageSingleSEO/PageSingleSEO";
import SEO from "../components/common/seo";

export default function BlogPost({pageContext: {pageData}, location}) {
  const TitleSEO = pageData.title;
  const DescriptionSEO = pageData.description;
  
  // console.log("🚀 ~ file: page-single-seo.tsx:32 ~ BlogPost ~ pageData:", pageData)
  return (
    <Layout location={location}>
      <SEO  
      title={TitleSEO} 
      description={DescriptionSEO} />
      <PageSingleSEOContainer 
      pageProps={pageData}
      />
    </Layout>
  )
}
