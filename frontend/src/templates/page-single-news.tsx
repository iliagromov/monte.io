import React from "react";
import Layout from "../layouts/Default/en";
import { Link, graphql, useStaticQuery } from "gatsby";
import { PageProps } from 'gatsby'


/**
 * Я могу получать все посты и фильтровать их по нужным параметрам и выводить
 * если мне нужны категории я могу получать все категории сравнивать с названием и выводить
 * Если запрос сделан на посты, то тут тоже дергаю посты, чтобы не путаться, потому подумать как правильно выполять запросы WP
 */
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        id  
        slug
        uri
        title
        content
        categories {
          nodes {
              id
              slug
              name
            }
        }
      }
    }
  }
`;

export default function BlogPost({ data, location }) {
  // FIXME: data.allWpPost.nodes[0] cделать нормальный путь и проверку
  const post = data.allWpPost.nodes[0];
  console.log(post);
  return (
    <Layout location={location}>
      <div className="container">
        <Link to="/">Home</Link>
        <div > 
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </Layout>
  )
}
