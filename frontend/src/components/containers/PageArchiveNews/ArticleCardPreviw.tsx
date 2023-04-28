import { Link, graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'
import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import './style.scss'

type ArticleCardPreviwProps = {
    postProps: any
}

const ArticleCardPreviw: FC<ArticleCardPreviwProps> = ({postProps}) => {

    // console.log(postProps.uri);
    const postURL = `/news${postProps.uri}`;
    const title = postProps.title;
    const date = postProps.date;
    const content = postProps.postProps;

    const {
        imgNewsMonteGT1
    } = useStaticQuery(
        graphql` {
      imgNewsMonteGT1: file(relativePath: { eq: "img-news-Monte-GT-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 360, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
`);

    return (
        
        <article className="article-card-preview">
            <Link to={postURL} className="article-card-preview-link">
            <div className="article-card-preview__img">
                <Img fluid={imgNewsMonteGT1.childImageSharp.fluid} />
            </div>
            <div className="article-card-preview__date">
                {date}
            </div>
            <div className="article-card-preview__title">
                {title}
            </div>
            <div className="article-card-preview__description">
            Watch Monte GT tested reviewed by our customer Watch Monte GT tested reviewed by our customer Watch Monte GT tested reviewed by our customer 
            </div>
            <div className="article-card-preview__link">
                <Link to={postURL}>Learn more </Link>
            </div>
            </Link>
        </article>
    )
}

export default ArticleCardPreviw
