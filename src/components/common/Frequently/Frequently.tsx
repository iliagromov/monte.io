import React, { FC } from 'react';
import cn from 'classnames'

import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Frequently.scss';

const FrequentlyComponent: FC = () => {
    const {
        imgFrequently1,
        imgFrequently2,
        imgFrequently3,
        imgFrequently4,
      } = useStaticQuery(graphql`
            query {
                imgFrequently1: file(relativePath: { eq: "img-frequently-1.svg" }) {
                    publicURL
                    name
                }
                imgFrequently2: file(relativePath: { eq: "img-frequently-2.svg" }) {
                    publicURL
                    name
                }
                imgFrequently3: file(relativePath: { eq: "img-frequently-3.svg" }) {
                    publicURL
                    name
                }
                imgFrequently4: file(relativePath: { eq: "img-frequently-4.svg" }) {
                    publicURL
                    name
                }
            }
       `)
    return (
<section className="frequently">
        <h2
          className={cn(
            'faq__title', 'text-lg-center h1 mb-4 mb-lg-5', 'faq__title--small text-md-left h2 mb-4 mb-lg-4'
          )}
        >
          Frequently asked questions
        </h2>
        <div className="container">
          <div className="frequently-inner">
            <div className="frequently-items">
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <ReactSVG className="certificate-block__img-background" src={imgFrequently1.publicURL} />
                 
                </div>
                <div className="frequently-item__text">
                  Plug and play installation
                </div>
                <div className="frequently-item__description">
                  No special automotive knowledge needed. Monte takes less than 5 minutes to be installed.
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <ReactSVG className="certificate-block__img-background" src={imgFrequently2.publicURL} />
                 
                </div>
                <div className="frequently-item__text">
                  Versatility
                </div>
                <div className="frequently-item__description">
                  compatibility with a wide range of vehicles, including trucks and cars produced after 1996
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <ReactSVG className="certificate-block__img-background" src={imgFrequently3.publicURL} />
                  
                </div>
                <div className="frequently-item__text">
                  Engineered in USA
                </div>
                <div className="frequently-item__description">
                  Designed and engineered in the USA  a high-quality product that is built to last.
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
              <div className="frequently-item">
                <div className="frequently-item__icon">
                  <ReactSVG className="certificate-block__img-background" src={imgFrequently4.publicURL} />
                </div>
                <div className="frequently-item__text">
                  Lifetime warranty
                </div>
                <div className="frequently-item__description">
                  backed by a lifetime warranty against defects, providing peace of mind
                </div>
                <a href="">
                    Learn more >
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
}


export { FrequentlyComponent };

