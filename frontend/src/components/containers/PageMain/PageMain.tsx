import * as React from "react";
import { Link, PageProps, useStaticQuery, graphql } from "gatsby";


const PageMain: React.FC<PageProps> = (props) => {

  const { allWpPage } = useStaticQuery(graphql`{
          allWpPage {
            nodes {
              id
              slug
              uri
              title
              content
            }
          }
        }
  `);
  const allPages = allWpPage.nodes.map((node:any) => (
    <div key={node.slug}>
      <Link to={node.uri}>
        <h2>{node.title}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  ));
  // console.log(allWpPost);
  return (
    <>

      <h1>My WordPress Blog</h1>
      <div>test</div>
    </>
  )
}
export default PageMain;
