import { Link, graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import './style.scss'
import ArticleCardPreviw from './ArticleCardPreviw'


const PageArchiveNews: FC = () => {


  const { 
    allWpPost,
    imgNewsMonteGT1
   } = useStaticQuery(
    graphql` {
      allWpPost {
        nodes {
          id  
          slug
          uri
          title
          content
          date(formatString: "d/Mo/Y")
          categories {
            nodes {
                id
                slug
                name
              }
          }
        }
      }
      imgNewsMonteGT1: file(relativePath: { eq: "img-news-Monte-GT-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 360, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
`);


  // console.log(allWpPost);

  
  const renderNews = allWpPost.nodes.map((newsItem:any, i: number) => {
      const postURL = `/news${newsItem.uri}`;
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
