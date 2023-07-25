import React, { FC, ComponentProps } from 'react';
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'


import './SliderGT.scss';
import { StaticImage } from 'gatsby-plugin-image';


type SwiperProps = ComponentProps<typeof Swiper>

SwiperCore.use([Pagination, Navigation])


const SliderGTComponent: FC = () => {



    const swiperParams: SwiperProps = {
        spaceBetween: 20,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.product-card__slider_next',
            prevEl: '.product-card__slider_prev',
        },
    }


    return (

        <section className="slider-gt">
            <div className="container">
                <div className="row">
                    <div className={cn('col-md-12')}>
                        <h2 className="app-ui__title h3 text-lg-center">
                            Easy to install in less than 5 minutes
                        </h2>
                        <Swiper
                            className="product-card__slider product-card__slider-gt"
                            {...swiperParams}
                        >
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-1.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-2.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-3.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-4.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-5.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-6.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-7.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-8.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-9.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-10.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide

                                className="product-card__slide product-card__slide_desctop"
                            >
                                <div className="product-card__slide-container">
                                    <StaticImage
                                        src='../../../assets/images/gt-slide-11.png'
                                        alt={'image'}
                                    />
                                </div>
                            </SwiperSlide>
                            {/* {slider.images.map(({ srcset }, i) => (
                                <SwiperSlide
                                    key={`mobile_${i}`}
                                    className="product-card__slide product-card__slide_mobile"
                                >
                                    <div className="product-card__slide-container">
                                        <img src={srcset.mobile} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))} */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

    );
}


export { SliderGTComponent };

