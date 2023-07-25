import React, { FC } from 'react';
import cn from 'classnames';
import { ReviewsItem, ReviewsItemProps } from './ReviewsItem/ReviewsItem';


// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Reviews.scss';

type ReviewsProps = {
    className?: string
    reviews: ReviewsItemProps[]
  }

const ReviewsComponent: FC<ReviewsProps> = ({ className, reviews }) => {
    const renderItems = reviews.map(({ author, date, rating, text }) => (
        <li className="reviews__item" key={`${author}_${rating}`}>
          <ReviewsItem author={author} date={date} rating={rating} text={text} />
        </li>
      ))
    return (

        <div className={cn('reviews', className)}>
        <ul className="reviews__list">{renderItems}</ul>
      </div>

    );
}


export { ReviewsComponent };

