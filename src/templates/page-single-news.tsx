import React from "react";
import Layout from "../layouts/Default/en";
import { graphql } from "gatsby";
import PageSingleNews from "../components/containers/PageSingleNews";
import SEO from "../components/common/seo";


/**
 * Я могу получать все посты и фильтровать их по нужным параметрам и выводить
 * если мне нужны категории я могу получать все категории сравнивать с названием и выводить
 * Если запрос сделан на посты, то тут тоже дергаю посты, чтобы не путаться, потому подумать как правильно выполять запросы WP
 */
export const query = graphql`
   query GetNewsPost ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default function BlogPost({data, location}) {
  
  const post = data.markdownRemark.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={post.title} />
      <PageSingleNews postProps={post}
        />
    </Layout>
  )
}
