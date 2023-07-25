import React, { FC } from 'react';
import cn from 'classnames';
// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

// data
import {
    faqSection,
  } from '../../../data/page-main'

import './FaqSectionMain.scss';
import FaqSection from '../Faq';
import FaqList from '../FaqList';

const FaqSectionMainComponent: FC = () => {
    //   const { 
    //     mainSlogan
    //   } = useStaticQuery(graphql`
    //     query  {
    //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
    //           publicURL
    //           name
    //       }
    //     }`);
    return (

        <div className={cn('col-md-12', 'col-lg-12')}>
        <FaqSection title={faqSection.title} mod="pt-lg">
          <FaqList items={faqSection.items} />
        </FaqSection>
      </div>

    );
}


export { FaqSectionMainComponent };

