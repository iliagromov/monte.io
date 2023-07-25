import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import './style.scss'
import ArticleCardPreviw from './ArticleCardPreviw'

const PageArchiveNews: FC = (props) => {

  const { 
    allMarkdownRemark
   } = useStaticQuery(
    graphql` {
      
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "news"}}}
      ){
        nodes {
          id
          frontmatter {
            slug
            category
          }
        }
      }
    }
`);
  
  const renderNews = allMarkdownRemark.nodes.map((newsItem:any, i: number) => {
      
      return(
            <ArticleCardPreviw 
            postProps={newsItem}
            key={`news__${i}`}/>
        
      )
  });
  return (
    <section className="section page-archive-news">
     <div className="container">
      <div className="page-archive-news-inner">
        <div className="page-archive-news__items">
          {renderNews}
        </div>
      </div>
     </div>
    </section>
  )
}

export default PageArchiveNews
