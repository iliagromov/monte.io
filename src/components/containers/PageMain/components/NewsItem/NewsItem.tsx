import { Link } from 'gatsby'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { getHrefWithLocale } from '../../../../../utils'
import './style.scss'

const blockName = 'news-item'

export type NewsItemProps = {
  title: string
  link: string
  img: string
  text?: string
  date?: string
}

export const NewsItem: FC<NewsItemProps> = ({
  title,
  link,
  img,
  text,
  date,
}) => {
  const intl = useIntl()
  return (
    <a
      href={link}
      className={`${blockName}`}
      target="_blank"
    >
      <div className={`${blockName}__img-wrap responsive-media mb-4`}>
        <img src={img} alt="" />
      </div>
      <div className={`${blockName}__title h5 mb-2`}>{title}</div>
      <div className={`${blockName}__text`}>{text}</div>
      <div className={`${blockName}__date`}>{date}</div>
    </a>
  )
}
