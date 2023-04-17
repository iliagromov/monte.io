import cn from 'classnames'
import React, { FC } from 'react'
import { ReviewsItem, ReviewsItemProps } from '../ReviewsItem'
import './style.scss'

type ReviewsProps = {
  className?: string
  reviews: ReviewsItemProps[]
}

export const Reviews: FC<ReviewsProps> = ({ className, reviews }) => {
  const renderItems = reviews.map(({ author, date, rating, text }) => (
    <li className="reviews__item" key={`${author}_${rating}`}>
      <ReviewsItem author={author} date={date} rating={rating} text={text} />
    </li>
  ))

  return (
    <div className={cn('reviews', className)}>
      <ul className="reviews__list">{renderItems}</ul>
    </div>
  )
}
