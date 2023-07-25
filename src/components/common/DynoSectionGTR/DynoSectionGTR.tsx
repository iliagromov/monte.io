import React, { FC } from 'react';
import cn from 'classnames'
// import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import {
    dyno
  } from '../../../data/page-gtr'
import './DynoSectionGTR.scss';
import { FormattedMessage } from 'react-intl';
import { Icon } from '../../ui';
import { StaticImage } from 'gatsby-plugin-image';

const DynoSectionGTRComponent: FC = () => {
      
      
    return (

        <div className={cn('dyno-section', 'section')}>
      <div className="container">
        <div className="row">
            <div className="col-md-5 col-lg-6 order-md-1">
                <StaticImage
                    className={'dyno-section__img'}
                    alt={`image`}
                    src='../../../assets/images/gtr-graph.jpg'
                    />
            </div>

          <div className="col-md-7 col-lg-6">
            <div className="h1 mb-3">
              <FormattedMessage id={dyno.title} />
            </div>
            <div className="dyno-section__descr">
              <FormattedMessage id={dyno.text} />
            </div>

            <div className="dyno-section__features">
              {dyno.features.map(({ icon, text }, i) => (
                <div className="dyno-section__feature" key={`${i}-${icon}`}>
                  <Icon name={icon} className="dyno-section__feature-icon" />

                  <div className="dyno-section__feature-text">
                    <FormattedMessage id={text} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    );
}


export { DynoSectionGTRComponent };

