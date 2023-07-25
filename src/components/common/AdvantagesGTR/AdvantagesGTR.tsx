import React, { FC } from 'react';
import cn from 'classnames'
// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './AdvantagesGTR.scss';
import { OddsComponent } from '../AdvantagesGT/Odds/Odds';
import { ProductCardGTComponent } from '../AdvantagesGT/ProductCardGT/ProductCardGT';

//TODO: сделать подгрузку пропсов
const AdvantagesGTRComponent: FC = () => {
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

        <div className="container">
        <div className="row">
          <div className={"col-lg-6 advantages" }>
            <OddsComponent />
          </div>
          <div
            className={cn(
              'col-md-6',
              'col-xl-5',
              'ml-xl-auto',
              'pl-xl-0',
              'd-flex'
            )}
          >
            <ProductCardGTComponent/>
          </div>
        </div>
      </div>


    );
}


export { AdvantagesGTRComponent };

