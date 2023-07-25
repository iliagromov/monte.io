
import React, { FC } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './NewsItem.scss'


export type NewsItemProps = {
  title: string
  link: string
  image: any
  text?: string
  date?: string
}

export const NewsItem: FC<NewsItemProps> = ({
  title,
  link,
  image,
  text,
  date,
}) => {
  const imgSrc = getImage(image);
  return (
    <a
      href={link}
      className={`news-item`}
      target="_blank"
    >
      <div className={`news-item__img-wrap responsive-media mb-4`}>
        <GatsbyImage
          image={imgSrc}
          alt={'img'}
        />
      </div>
      <div className={`news-item__title h5 mb-2`}>{title}</div>
      <div className={`news-item__text`}>{text}</div>
      <div className={`news-item__date`}>{date}</div>
    </a>
  )
}
