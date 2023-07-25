import React, { FC } from 'react';

import {
    installVideo,
  } from '../../../data/page-gtr'

import './InstallVideo.scss';
import { Heading, Section } from '../../ui';
import { FormattedMessage } from 'react-intl';
import { Video } from '../Video/Video';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const InstallVideoComponent: FC = () => {
    const { 
        promoVideoPreview
      } = useStaticQuery(graphql`
        query  {
            promoVideoPreview: file(relativePath: { eq: "gtr-install.jpg" }) {
                childImageSharp {
                gatsbyImageData(placeholder: BLURRED )
              }
      }
        }`);

    const promoVideoPreviewSrc = getImage(promoVideoPreview)
    return (

        <Section withContainer>
        <Heading tag="h2" like="h1" className="text-center mb-5">
            <FormattedMessage id={installVideo.title} />
        </Heading>
        <Video
            youTubeId={installVideo.youTubeId}
            preview={promoVideoPreviewSrc}
        />
        </Section>

    );
}


export { InstallVideoComponent };

