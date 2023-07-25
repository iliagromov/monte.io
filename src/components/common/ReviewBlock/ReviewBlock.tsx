import React, { FC } from 'react';

import cn from 'classnames'

import './ReviewBlock.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ReviewBlockComponent: FC = () => {

    return (

        <div className="review-block">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', 'h2 mb-4 mb-lg-4'
        )}>Featured review</h2>
        <div className="container">
          <div className="review-block-inner">
            <div className="review-block__img">
                <StaticImage
                   className="certificate-block__img-background" 
                    src='../../../assets/images/review-poster.png'
                    alt={'banner'}
                    />
             
            </div>
            <div className="review-block__text">
              <h2>Jakey</h2>
              <p>
              I definitely feel the deference on my Abarth and here are the numbers to prove it! Great gains for both power and torque!
              </p>

            </div>
          </div>

        </div>
      </div>

    );
}


export { ReviewBlockComponent };

