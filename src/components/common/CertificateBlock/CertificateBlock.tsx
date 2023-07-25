import React, { FC } from 'react';
import cn from 'classnames'

import './CertificateBlock.scss';
import { StaticImage } from 'gatsby-plugin-image';

const CertificateBlockComponent: FC = () => {
    

    return (

        <div className="certificate-block">
            <h2
                className={cn(
                    'certificate-block__title', 'text-lg-center h1 mb-4 mb-lg-5', 'faq__title--small text-md-left h2 mb-4 mb-lg-4'
                )}
            >
                Tested, Safe and Certified Tuning for your car
            </h2>
            <div className="container">
                <div className="certificate-block-inner">
                    <StaticImage
                        className="certificate-block__img-background"
                 
                        src='../../../assets/images/certificates.png'
                        alt={'banner'}
                    />
                </div>
            </div>
        </div>

    );
}


export { CertificateBlockComponent };

