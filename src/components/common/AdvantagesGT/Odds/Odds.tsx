import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import {
    odds as oddsProps,
  } from '../../../../data/page-gt'
import './Odds.scss';
import OddsItem from './OddsItem/OddsItem';
import { useIntl } from 'react-intl';

const OddsComponent: FC = () => {
    //   const { 
    //     mainSlogan
    //   } = useStaticQuery(graphql`
    //     query  {
    //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
    //           publicURL
    //           name
    //       }
    //     }`);
    const intl = useIntl()
    const i18nTitle = intl.formatMessage({ id: oddsProps.title })
    const renderItems = oddsProps.items.map(item => {
        return (
          <li className="odds__item col-6 col-md-3 col-lg-4" key={item.title}>
            <OddsItem {...item} />
          </li>
        )
      })
    
    return (

        <div className={'odds'}>
        <h2
            className="odds__title h1"
            dangerouslySetInnerHTML={{ __html: i18nTitle }}
        />
        <ul className="odds__list row">{renderItems}</ul>
        </div>

    );
}


export { OddsComponent };

