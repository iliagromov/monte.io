
import React, { FC } from 'react'

import './PageReviews.scss'
import { ReviewsComponent } from '../../common/Feedback/Reviews/Reviews'
import {
  reviews,
  votes,
} from '../../../data/page-gt'
import { StaticImage } from 'gatsby-plugin-image'


type PageReviewsContainerProps = {
  postProps?: any
}

const PageReviewsContainer: FC<PageReviewsContainerProps> = () => {


const productMain1 = '../../../assets/images/uploaded__img.png';
const productMain2 = '../../../assets/images/star.png';
const productMain3 = '../../../assets/images/uploaded__img3.png';
const productMain4 = '../../../assets/images/uploaded__img2.png';
const productMain5 = '../../../assets/images/uploaded__img1.png';
const productMain6 = '../../../assets/images/uploaded__img4.png';
const productMain7 = '../../../assets/images/uploaded__img5.png';
const productMain8 = '../../../assets/images/addPhoto.png';
const productMain9 = '../../../assets/images/x.png';
const productMain10 = '../../../assets/images/like.png';
const productMain11 = '../../../assets/images/exit.png';

  return (
    <article className="section-reviews">
      <div className="container"> 
        <h1 className="reviews-title">Reviews</h1>
        <div className="reviews">
          <div className="reviews-block">
            <div className="whats-rate reviews-block__item">
              <div className="whats-rate__title">What’s your rate?</div>
              <div className="whats-rate__stars ratings-statistics__item">
                <StaticImage className="whats-rate__star" src={productMain2} alt={'reviews'}/>
                <StaticImage className="whats-rate__star" src={productMain2}  alt={'reviews'}/>
                <StaticImage className="whats-rate__star transparent-star" src={productMain2}  alt={'reviews'}/>
                <StaticImage className="whats-rate__star transparent-star" src={productMain2}  alt={'reviews'}/>
                <StaticImage className="whats-rate__star transparent-star" src={productMain2}  alt={'reviews'}/>
              </div>
            </div>
            <div className="reviews-block__item">
              <ReviewsComponent reviews={reviews} className="feedback__reviews" />
              <div className="reviews-block__uploaded">
              </div>
            </div>
            <div className="reviews-block__item">
              <ReviewsComponent reviews={reviews} className="feedback__reviews" />
              <div className="reviews-block__uploaded">
                <StaticImage className="uploaded__img" src={productMain3}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain4}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain5}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain6}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain7}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain4}  alt={'reviews'}/>
              </div>
            </div>
            <div className="reviews-block__item">
              <ReviewsComponent reviews={reviews} className="feedback__reviews" />
              <div className="reviews-block__uploaded">
              </div>
            </div>
            <div className="reviews-block__item">
              <ReviewsComponent reviews={reviews} className="feedback__reviews" />
              <div className="reviews-block__uploaded">
                <StaticImage className="uploaded__img" src={productMain3}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain4}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain5}  alt={'reviews'}/>
              </div>
            </div>
            <div className="reviews-block__item">
              <ReviewsComponent reviews={reviews} className="feedback__reviews" />
              <div className="reviews-block__uploaded">
                <StaticImage className="uploaded__img" src={productMain3}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain7}  alt={'reviews'}/>
              </div>
            </div>
            <div className="reviews-block__item">
              <ReviewsComponent reviews={reviews} className="feedback__reviews" />
              <div className="reviews-block__uploaded">
                <StaticImage className="uploaded__img" src={productMain5}  alt={'reviews'}/>
                <StaticImage className="uploaded__img" src={productMain6}  alt={'reviews'}/>
              </div>
            </div>
          </div>
            
          <div className="ratings-block">
            <StaticImage className="ratings-img" src={productMain2}  alt={'reviews'}/>
            <div className="ratings-title">4.9</div>
            <div className="ratings-subtitle">4 003 ratings</div>
            <div className="ratings-statistics">
              <div className="ratings-statistics__item">
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <div className="ratings-text">2 423 views</div>
              </div>
              <div className="ratings-statistics__item">
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2} />
               <div className="ratings-text">1 005 views</div>
              </div>
              <div className="ratings-statistics__item">
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <div className="ratings-text">965 views</div>
              </div>
              <div className="ratings-statistics__item">
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <div className="ratings-text">102 views</div>
              </div>
              <div className="ratings-statistics__item">
               <StaticImage className="ratings-statistics__img" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <StaticImage className="ratings-statistics__img transparent-star" src={productMain2}  alt={'reviews'}/>
               <div className="ratings-text">4 views</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="container"> 
        <h1 className="reviews-title reviews-write__title">Write a review</h1>
        <div className="reviews-forms-block">
          <div className="whats-rate reviews-block__item">
            <div className="whats-rate__title">What’s your rate?</div>
            <div className="whats-rate__stars ratings-statistics__item">
              <StaticImage className="whats-rate__star" src={productMain2} />
              <StaticImage className="whats-rate__star" src={productMain2} />
              <StaticImage className="whats-rate__star transparent-star" src={productMain2} />
              <StaticImage className="whats-rate__star transparent-star" src={productMain2} />
              <StaticImage className="whats-rate__star transparent-star" src={productMain2} />
            </div>
          </div>
          <div className="reviews-forms">
            <label className="reviews-forms__item">Your name
              <input className="reviews__name" placeholder='Enter you name'></input>
            </label>
            <label className="reviews-forms__item">Your email
              <input className="reviews__email" placeholder='Enter email'></input>
            </label>
            <label className="reviews-forms__item reviews-forms__title">Title
              <input className="reviews__title" placeholder='Give your a review a title'></input>
            </label>
            <label className="reviews-forms__item reviews-forms__comments">Comments
              <input className="reviews__title" placeholder='Write your comments here'></input>
            </label>
              <div className="addPhotos-block">
              <button className="addPhotos__btn uploaded__img">
                <StaticImage className="addPhotos__icon" src={productMain8} />
                <p className="page__text">Add a photo</p>
              </button>
              <div className="reviews-block__uploaded">
                <StaticImage className="uploaded__img" src={productMain3} />
                <StaticImage className="uploaded__img" src={productMain4} />
                <StaticImage className="uploaded__img" src={productMain5} />
                <StaticImage className="uploaded__img" src={productMain6} />
                <StaticImage className="uploaded__img" src={productMain7} />
                <StaticImage className="uploaded__img" src={productMain4} />
              </div>
              </div>
          </div>
          <div className="data-security">
            <input className="page__input" type="checkbox"></input>
            <p className="page__text">Yes. I have read, understood and accept your information to the data security.
              <a className="page-link" src="#"> Read Now</a> 
            </p>
          </div>
          <button className="reviews-btn reviews-btn__active">Submit review</button>

          

          <div className="reviews-thank">
            <div className="reviews-thank__btn">
              <button className="thank__btn reviews-btn">
                <StaticImage className="btn__img" src={productMain9} />
              </button>
            </div>
            <StaticImage className="reviews-thank__img" src={productMain10} />
            <h1 className="reviews-thank__title">Thank you for your review!</h1>
            <button className="close-btn reviews-btn" src='#'>Close</button>
          </div>
        </div>
      </div>
      <div className="container-terms"> 
        <div className="terms-conditions">
            <h1 className="terms-title">Terms and conditions</h1>
              <button className="terms-btn">
               <StaticImage className="terms__img" src={productMain11} />
              </button>
          </div>
      </div>
       */}
    </article>
  )
}

export default PageReviewsContainer
