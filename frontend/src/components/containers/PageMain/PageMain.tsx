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
      <h4>Posts</h4>
      <div className="car">
        this is car 
      </div>
      <div>
      **Real world gains may be less or more depending on a large number of
        contributing factors. Please note for the full adjustment it is
        necessary to drive 120 miles after each mode change. You can learn more
        about the adjustment in the Support Section.
        
      </div>
      <hr />
      {allPages}
    </>
  )
}
export default PageMain;
