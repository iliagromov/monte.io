import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import ChipItem from './ChipItem/ChipItem';

import './ChipUiGTR.scss';

const ChipUiGTRComponent: FC = () => {
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

    <section className={"chip-ui section"}>
      <div className="container">
        <div className="chip-ui__frame">
          <h2 className="chip-ui__title">A powerhouse full of features</h2>
          <div className="row chip-ui__items">
            <ChipItem />
          </div>
        </div>
      </div>
    </section>

    );
}


export { ChipUiGTRComponent };

