import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import {
    promoVideo,
  } from '../../../data/page-gtr'

import './PromoVideo.scss';
import { Heading, Section } from '../../ui';
import { FormattedMessage } from 'react-intl';
import { Video } from '../Video/Video';
import { getImage } from 'gatsby-plugin-image';
// import { getImage } from 'gatsby-plugin-image';

const PromoVideoComponent: FC = () => {
      const { 
        promoVideoPreview
      } = useStaticQuery(graphql`
        query  {
            promoVideoPreview: file(relativePath: { eq: "monte-video-preview.jpg" }) {
                childImageSharp {
                gatsbyImageData(placeholder: BLURRED )
              }
      }
        }`);

    const imgNewsMonteGT1Src = getImage(promoVideoPreview)
    return (

        <Section withContainer>
            <Heading tag="h3" className="text-center mb-5">
            <FormattedMessage id={promoVideo.title} />
            </Heading>
            <Video
                youTubeId={promoVideo.youTubeId}
                preview={imgNewsMonteGT1Src}
            />
        </Section>

    );
}


export { PromoVideoComponent };

