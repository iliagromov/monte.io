import React, { FC } from 'react';
import cn from 'classnames'


import './Featured.scss';
import { StaticImage } from 'gatsby-plugin-image';

const FeaturedComponent: FC = () => {
    


    return (

        <div className="featured">
            <h2 className={cn(
                'text-lg-center h1 mb-4 mb-lg-5', 'h2 mb-4 mb-lg-4'
            )}>Featured in </h2>
            <div className="container">
                <div className="featured-inner">
                    <div className="featured__partners-row">

                        <StaticImage
                            className="certificate-block__img-background"
                            src='../../../assets/images/featured-logos.png'
                            alt={'img'}
                        />

                    </div>
                    <div className="featured__text-container">
                        <div className="featured__text">
                            Monte Tuning is a proud member of the SEMA
                            <br />
                            ( Specialty Equipment Market Association )
                        </div>
                        <div className="featured__img">
                            <div className="featured__img-text">
                                Monte Tuning is a proud member of the SEMA
                            </div>
                            <StaticImage
                                className="certificate-block__img-background"
                                src='../../../assets/images/certificate-сouncil.png'
                                alt={'img'}
                            />

                            <div className="featured__img-text">
                                Tested, Safe and Certified Tuning for your car
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export { FeaturedComponent };

