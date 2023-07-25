import React, { FC } from 'react';
import cn from 'classnames'
// import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './ProgrammerGTR.scss';
import { Button, Heading, Icon, Section } from '../../ui';
import { StaticImage } from 'gatsby-plugin-image';
import {
    programmer as programmerProps,
  } from '../../../data/page-gtr'
import { FormattedMessage } from 'react-intl';
import { getClassNameModificators } from '../../../utils';

const ProgrammerGTRComponent: FC = () => {
      
    const renderFeatures = programmerProps.features.map(({ icon, text }) => (
        <div key={icon} className="programmer__feature">
        <Icon name={icon} className="programmer__feature-icon" />
        <Heading tag="h5" className="programmer__feature-text">
            <FormattedMessage id={text} />
        </Heading>
        </div>
    ))


    return ( 
        <Section withContainer>
          <div className={cn(
                    'programmer',
                    getClassNameModificators('programmer', "mobile-full"),
                )}
                >
                <div className="row">
                    <div className="col-md-6 pr-md-0 mb-5 mb-md-0">
                    <div className="programmer__features">{renderFeatures}</div>

                    <Button type="ghost" block href={programmerProps.fileLink}>
                        <span>
                        <FormattedMessage id={programmerProps.btnText} />
                        </span>
                    </Button>

                    <div className="text-center mt-3">
                        <FormattedMessage id={programmerProps.infoText} />
                    </div>
                    </div>

                    <div className="col-md-6">
                    <StaticImage
                        className="programmer__img"
                            src='../../../assets/images/chip-and-notebook.png'
                            alt={` image`}
                            />
                    </div>
                </div>
                </div>
        </Section>

    );
}


export { ProgrammerGTRComponent };

