import React, { ComponentProps, FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './News.scss';
import { NewsItem } from './NewsItem/NewsItem';


type SwiperProps = ComponentProps<typeof Swiper>


const NewsComponent: FC = () => {
    const {
        imgNew1,
        imgNew2,
        imgNew3,
        imgNew4
      } = useStaticQuery(graphql`
        query {
          imgNew1: file(relativePath: { eq: "img-new-1.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          imgNew2: file(relativePath: { eq: "img-new-2.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          imgNew3: file(relativePath: { eq: "img-new-3.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          imgNew4: file(relativePath: { eq: "img-new-4.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }`)
    

    const swiperOptions: SwiperProps = {
        spaceBetween: 16,
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
          992: {
            slidesPerView: 3,
          },
        },
        onSwiper: swiper => {
          // slides visibility bugfix
          setTimeout(() => {
            swiper.update()
          }, 500)
        },
        onSlideChange: swiper => {
          // slides visibility bugfix
          swiper.update()
        },
      }

      const items = [
        {
          image: imgNew1,
          title: 'Abarth Tested with Monte GTR',
          text:
            'Watch Abarth tested on the dyno several times with and without Monte GTR.',
          link: 'https://www.youtube.com/watch?v=YWZk9f8AD9s',
          date: '09/25/2021',
        },
        {
          image: imgNew2,
          title: 'GTR tested by Carnews Taiwan',
          text:
            'Monte GTR Testeted and explained by the Taiwanese motor journalists.',
          link: 'https://www.youtube.com/watch?v=ILkxUvJh3Pc',
          date: '09/25/2021',
        },
        {
          image: imgNew3,
          title: 'Watch Monte GTR features video',
          text: 'Learn more about Monte GTR and its features.',
          link: 'https://www.youtube.com/watch?v=gAe6y6PzWZg&t=2s',
          date: '09/25/2021',
        },
        {
          image: imgNew4,
          title: 'Video installation guide for GTR ',
          text: 'Easy installation in less than 5 minutes. Learn how, here. ',
          link: 'https://www.youtube.com/watch?v=PLmjexxCssc',
          date: '09/25/2021',
        },
      ];


    const renderSlides = items.map((newsItem, i) => (

        <SwiperSlide key={i} className={`news__slide`}>
        <NewsItem 
            title={newsItem.title}
            link={newsItem.link}
            image={newsItem.image}
            text={newsItem.text}
            date={newsItem.date}
        />
        </SwiperSlide>
    ))



    return (

        <div className={`news section`}>
        <div className="container">
          <div className={`news__title text-center h3`}>
            Over 100k Customers Worldwide. Join Monte community now
          </div>
  
          <Swiper className={`news__slider`} {...swiperOptions}>
            {renderSlides}
          </Swiper>
  
          <div className={`news__link-wrap`}>
            <Link to="/news" className={`news__link-more`}>
              Read other news
              <RightOutlined className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

    );
}


export { NewsComponent };

