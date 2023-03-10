import * as React from "react";
import { Link, PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";


const PageMain: React.FC<PageProps> = (props) => {

  const { allWpPost } = useStaticQuery(graphql`{
          allWpPost(sort: { fields: [date], order:DESC }) {
            nodes {
              title
              excerpt
              content
              slug
            }
          }
        }
  `);
  // console.log(allWpPost);
  return (
    <>

      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      <hr />
      {allWpPost.nodes.map(node => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </>
  )
}
export default PageMain;
