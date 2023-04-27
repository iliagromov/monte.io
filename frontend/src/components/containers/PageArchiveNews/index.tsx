import { Link, graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'

import './style.scss'


const PageArchiveNews: FC = () => {


  const { allWpPost } = useStaticQuery(
    graphql` {
      allWpPost {
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
`);

  // console.log(allWpPost);

  const renderNews = allWpPost.nodes.map((newsItem:any, i: number) => {

      const postURL = `/news${newsItem.uri}`;
      return(
          <div key={`news__${i}`}>
            <Link to={postURL}>
            {newsItem.title}
            </Link>
            
          </div>
      )
  });
  return (
    <section className="section">
     <div className="container">
      PageArchiveNews
      {renderNews}
     </div>
    </section>
  )
}

export default PageArchiveNews
