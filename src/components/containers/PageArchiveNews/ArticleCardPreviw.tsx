import { Link } from 'gatsby'

import React, { FC } from 'react'
import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'

type ArticleCardPreviwProps = {
    postProps: any
}

const ArticleCardPreviw: FC<ArticleCardPreviwProps> = ({postProps}) => {

    // console.log(postProps.uri);
    const postURL = `/news/${postProps.frontmatter.slug}`;
    const title = postProps.frontmatter.title;
    const date = postProps.date;
    const content = postProps.postProps;


    return (
        
        <article className="article-card-preview">
            <Link to={postURL} className="article-card-preview-link">
            <div className="article-card-preview__img">
            <StaticImage
                src='../../../assets/images/img-news-Monte-GT-1.png'
               
                alt={'img'}
                />
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
              Learn more 
            </div>
            </Link>
        </article>
    )
}

export default ArticleCardPreviw
