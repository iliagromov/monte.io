import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql } from "gatsby";

import './AppButtons.scss';

const AppButtonsComponent: FC = () => {
    const title = 'Download the App for free';
    const links = [
        {
            type: 'google-play',
            href:
                'https://play.google.com/store/apps/details?id=com.montetuning.monte',
        },
        {
            type: 'app-store',
            href: 'https://apps.apple.com/us/app/monte-gt/id1582142065',
        },
    ];
    const {
        appStore,
        googlePlay
    } = useStaticQuery(graphql`
        query {
          appStore: file(relativePath: { eq: "app-store.svg" }) {
            publicURL
            name
          }
          googlePlay: file(relativePath: { eq: "google-play.svg" }) {
            publicURL
            name
          }
        }
      `)
    const imgMap = {
        'google-play': appStore.publicURL,
        'app-store': googlePlay.publicURL,
    }
    return (
        <div className={'app-buttons'}>
            {title && (
                <div className="app-buttons__title">
                    {title}
                </div>
            )}
            <div className="app-buttons__wrap">
                {links.map(({ type, href }, i) => {
                    return (
                        <a
                            className="app-buttons__btn"
                            href={href}
                            target="_blank"
                            key={`id-${i}-${href}`}
                        >
                            <img
                                className="app-buttons__btn-img"
                                src={imgMap[type]}
                                alt={type}
                            />
                        </a>
                    )
                })}
            </div>
        </div>

    );
}


export { AppButtonsComponent };

