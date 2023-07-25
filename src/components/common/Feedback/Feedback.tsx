import React, { FC } from 'react';
import { RightOutlined } from '@ant-design/icons'

import {
    reviews,
    votes,
  } from '../../../data/page-gt'
import { FeedbackRating } from './FeedbackRating/FeedbackRating';
import { ReviewsComponent } from './Reviews/Reviews';
import { Link } from 'gatsby';
import { FormattedMessage, useIntl } from 'react-intl';

import getBaseUrl from '../../../utils/getBaseUrl';

import './Feedback.scss';

const FeedbackComponent: FC = () => {
    const intl = useIntl()
    const baseUrl = getBaseUrl(intl)
  
    return (
        <div className="feedback">
            <h3 className="feedback__title h3">{'Feedback'}</h3>
            <FeedbackRating
                voteRatings={votes}
                className="feedback__rating"
                />
            <ReviewsComponent reviews={reviews} className="feedback__reviews" />

            <div className="feedback__link-wrap">
                <Link className="feedback__link" to={`${baseUrl}/reviews/`}>
                    <FormattedMessage id="pageGT.moreFeedback" />
                    <RightOutlined className="feedback__link-icon" />
                </Link>
            </div>
        </div>
        

    );
}


export { FeedbackComponent };

