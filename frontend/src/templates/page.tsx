import React from "react";
import Layout from "../layouts";
import { Link, graphql, useStaticQuery } from "gatsby";

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

export default function BlogPost({ data }) {
  const post = data.allWpPage.nodes[0];
  console.log(post);
  return (
    <Layout>
      <Link to="/">Home</Link>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
