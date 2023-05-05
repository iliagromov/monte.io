import React from "react";
import Layout from "../layouts/Default/en";
import { Link, graphql, useStaticQuery } from "gatsby";
import { PageProps } from 'gatsby'
import PageSingleSEO from "../components/containers/PageSingleSEO";
import SEO from "../components/common/seo";
export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;

export default function BlogPost({ data, location }) {
  const post = data.allWpPage.nodes[0];
  // console.log(post);
  return (
    <Layout location={location}>
      <SEO title={post.title} />
      <PageSingleSEO 
        postProps={post}
      />
    </Layout>
  )
}
