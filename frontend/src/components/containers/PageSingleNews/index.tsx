import { Link, graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import './style.scss'


type PageSingleNewsProps = {
  postProps: any
}

const PageSingleNews: FC<PageSingleNewsProps> = ({postProps}) => {
  const title = postProps.title;
  const date = postProps.date;
  const content = postProps.content;

  const {
        imgNewsMonteGT1,
        imgNewsMonteGT2,
        imgNewsMonteGT3
    } = useStaticQuery(
        graphql` {
      imgNewsMonteGT1: file(relativePath: { eq: "img-news-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 360, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgNewsMonteGT2: file(relativePath: { eq: "img-news-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 360, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imgNewsMonteGT3: file(relativePath: { eq: "img-news-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 360, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
`);

  return (
    <article className="section page-single-news">
     <div className="container">
       <div className="page-single-news-inner">
        
    
        <div className="page-single-news__gallary">
            <div className="page-single-news__gallary-item">
              <Img fluid={imgNewsMonteGT1.childImageSharp.fluid} />
            </div>
            <div className="page-single-news__gallary-item">
              <Img fluid={imgNewsMonteGT2.childImageSharp.fluid} />
            </div>
            <div className="page-single-news__gallary-item">
              <Img fluid={imgNewsMonteGT3.childImageSharp.fluid} />
            </div>
        </div>
        <div className="page-single-news__article">
          <div className="page-single-news__title">
            {title}
          </div>
          <div className="page-single-news__date">
            {date}
          </div>
          <div className="page-single-news__description">
            <p className="page-text" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          
        </div>
        <div className="page-single-news__link-back">
          <Link to="/news">back to all news</Link>
        </div>
       </div>
     </div>
     
    </article>
  )
}

export default PageSingleNews
