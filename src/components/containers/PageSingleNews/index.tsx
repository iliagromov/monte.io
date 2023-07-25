import { Link } from 'gatsby'
import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'


import './style.scss'


type PageSingleNewsProps = {
  postProps?: any
}

const PageSingleNews: FC<PageSingleNewsProps> = ({postProps}) => {
  const title = postProps.title;
  // const date = postProps.date;
  const content = postProps.content;



  return (
    <article className="section page-single-news">
     <div className="container">
       <div className="page-single-news-inner">
        
    
        <div className="page-single-news__gallary">
            <div className="page-single-news__gallary-item">
              <StaticImage
                className="page-img" 
                src='../../../assets/images/img-news-1.png'
                alt={'img'}
                />
            </div>
            <div className="page-single-news__gallary-item">
            
              <StaticImage
                className="page-img" 
                src='../../../assets/images/img-news-2.png'
                alt={'img'}
                />
            </div>
            <div className="page-single-news__gallary-item">
              <StaticImage
                className="page-img" 
                src='../../../assets/images/img-news-3.png'
                alt={'img'}
                />
            </div>
        </div>
        <div className="page-single-news__article">
          <div className="page-single-news__title">
            {title}
          </div>
          <div className="page-single-news__date">
            {/* {date} */}
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
