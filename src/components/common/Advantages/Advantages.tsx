import React, { FC } from 'react';
import cn from 'classnames'
import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql } from "gatsby";

import './Advantages.scss';

const AdvantagesComponent: FC = () => {
      const { 
            imgProductCardInfo1,
            imgProductCardInfo2,
            imgProductCardInfo3,
            imgProductCardInfo4,
      } = useStaticQuery(graphql`
        query  {
            imgProductCardInfo1: file(relativePath: { eq: "imgProductCardInfo1.svg" }) {
                publicURL
                name
            }
            imgProductCardInfo2: file(relativePath: { eq: "imgProductCardInfo2.svg" }) {
                publicURL
                name
            }
            imgProductCardInfo3: file(relativePath: { eq: "imgProductCardInfo3.svg" }) {
                publicURL
                name
            }
            imgProductCardInfo4: file(relativePath: { eq: "imgProductCardInfo4.svg" }) {
                publicURL
                name
            }
        }`);
    return (

        <div className="advantages">
        <h2 className={cn(
          'text-lg-center h1 mb-4 mb-lg-5', ' h2 mb-4 mb-lg-4'
        )}>The ultimate upgrade for any performance enthusiast.</h2>
        <div className="container">
          <div className="advantages-inner">
            <div className="advantages-items">
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG
                      src={imgProductCardInfo1.publicURL}
                    />
                  </div>
                </div>

                <div className="advantages-item__text">
                  Unlock full <span>potential of your car</span> 
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG className="page-icon" src={imgProductCardInfo2.publicURL} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Up to 20% <span>more power</span> 
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG className="page-icon" src={imgProductCardInfo3.publicURL} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Save up to 10% <span>on fuel</span>
                </div>
              </div>
              <div className="advantages-item">
                <div className="advantages-item__icon-bg">
                  <div className="advantages-item__icon">
                    <ReactSVG className="page-icon" src={imgProductCardInfo4.publicURL} />
                  </div>

                </div>
                <div className="advantages-item__text">
                  Easy to install and with <span>lifetime warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}


export { AdvantagesComponent };

