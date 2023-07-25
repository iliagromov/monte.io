import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './InstallationSteps.scss';
import { Heading, Icon, Section } from '../../ui';
import { FormattedMessage } from 'react-intl';
import {
    installation,
  } from '../../../data/page-gtr'


const InstallationStepsComponent: FC = () => {
    //   const { 
    //     mainSlogan
    //   } = useStaticQuery(graphql`
    //     query  {
    //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
    //           publicURL
    //           name
    //       }
    //     }`);

    const renderSteps = installation.steps.map(({ icon, title, descr }) => (
        <li key={icon} className="installations-steps__item col-md">
          <div className="installations-step">
            <Icon name={icon} className="installations-step__icon" />
            <Heading tag="h5" like="h2" className="installations-step__title">
              <FormattedMessage id={title} />
            </Heading>
            <div className="installations-step__descr">
              <FormattedMessage id={descr} />
            </div>
          </div>
        </li>
      ))

      
    return (

        <Section withContainer>
        <Heading className="mb-5 col-md-10 px-0">
            <FormattedMessage id={installation.title} />
        </Heading>

         <div className={"installations-steps pt-xl-5"}>
            <ul className="installations-steps__list row">{renderSteps}</ul>
        </div>
        </Section>

    );
}


export { InstallationStepsComponent };

