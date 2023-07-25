import React, { FC } from 'react';
import {  Link,  } from "gatsby";

import './PermalinksSEO.scss';

type PermalinksSEOProps = {
    permalinks: any
}
// TODO: сделать типы 
const PermalinksSEOComponent: FC<PermalinksSEOProps> = ({permalinks}) => {
    function replaceSymbol(str){
        let slugSorted0 = str.split(' ').join('-').toLowerCase();
        let slugSorted1 = slugSorted0.split('/').join('-');
        let slugSorted2 = slugSorted1.split('.').join('-');
        return slugSorted2;
      }
    // FIXME: обработать пустой массив
    const RenderItems = permalinks.models && permalinks.models.map((model, i)=>{
        return(
            <div key={`model__${i}`}>
                <h3 className="block-permalinks__car">{model.model}</h3>
                <div className="block-permalinks__links">
                    {model.engines && model.engines.map((engine, i)=>{
                        return(
                            <div 
                            key={`engine__${i}`}
                            className="block-permalinks__links-row">
                                {engine.years && engine.years.map((year, i)=>{
                                    let title = `${engine.engine} ${year.year}`;
                                    let str = `${permalinks.titleH1} ${model.model} ${engine.engine} ${year.year}`;
                                    let slug = replaceSymbol(str);
                                    
                                    return(
                                        <div 
                                        key={`year__${i}`}
                                        className="block-permalinks-link"> 
                                            <Link className='page-link' to={`/${slug}`}>{title}</Link>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            
        )
    })

    return (

        <section className='block-permalinks'>
        <div className="container">
            <div className="block-permalinks-inner">
              <h2 className='block-permalinks__title'> Monte Tuning is compatible with {permalinks.titleH1}</h2>
              
                {RenderItems}
         
            </div>
        </div>
     </section>

    );
}


export { PermalinksSEOComponent };

