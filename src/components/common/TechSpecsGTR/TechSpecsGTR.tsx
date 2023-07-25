import React, { FC } from 'react';
import cn from 'classnames'
// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './TechSpecsGTR.scss';
import { Section } from '../../ui';

import {
    techSpecs as techSpecsProps,
} from '../../../data/page-gtr'
import TechSpecs from '../TechSpecs/TechSpecs';

const TechSpecsGTRComponent: FC = () => {
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

        <Section withContainer>
            <div className="row">
                <div
                    className={cn(
                        'col-md-6',
                        'col-lg-10',
                        'order-lg-1',
                        'mx-lg-auto',
                        'pt-lg-5',
                        'mt-lg-5'
                    )}
                >
                    <TechSpecs
                        asTableUp="lg"
                        {...techSpecsProps}
                    />
                </div>
            </div>
        </Section>

    );
}


export { TechSpecsGTRComponent };

