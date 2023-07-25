import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import {
    techSpecs as techSpecsProps,
  } from '../../../data/page-gt'


import TechSpecs from '../TechSpecs';

import './TechSpecsGT.scss';
import { FeedbackComponent } from '../Feedback/Feedback';

const TechSpecsGTComponent: FC = () => {
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

        <section className="TechSpecsGTComponent">
            <div className="container">
                <div className="row">
                    <div className={"col-12 col-md-6 col-lg-7 specs"}>
                        <TechSpecs asTableUp="md" {...techSpecsProps} />
                    </div>
                    <div className={"col-12 col-md-6 col-lg-5 specs"}>
                        <FeedbackComponent/>
                    </div>
                </div>
            </div>
        </section>

    );
}


export { TechSpecsGTComponent };

