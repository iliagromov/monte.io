
import React, { FC,  useState, useEffect } from 'react'
import { Link, PageProps, graphql } from 'gatsby'

import Layout from '../../layouts/Default/en'
import SEO from '../../components/common/seo'
import { getBrandsServerSide } from '../../hooks/useBrandsQueryServerSide'
import { makeRequest } from '../../utils/makeRequest'


const Page: FC<PageProps> = ( {data, serverData, location }) => {
    console.log("🚀 ~ file: index.tsx:11 ~ serverData:", data)

    const [clientResults, setClientResults] = useState();


    const getClientData = async () => {
      const url = 'https://montetuning.app';
      const brandsResponse = await makeRequest(`${url}/api/v1/makes`);
      setClientResults(brandsResponse.results);
    };

    useEffect(() => {
      getClientData();
    });

    // const Brands = serverData.pageMetadata;
    // function replaceSymbol(str){
    //   let slugSorted0 = str.split(' ').join('-').toLowerCase();
    //   let slugSorted1 = slugSorted0.split('/').join('-');
    //   let slugSorted2 = slugSorted1.split('.').join('-');
    //   return slugSorted2;
    // }
  
    // const models = Brands.map(item => {
    //   let slug = replaceSymbol(item);
    //   return {title: item, slug: slug}
    // });
  
  
    // const initialValue = {};
    // const sumWithInitial = models.reduce(
    //   (accumulator, currentValue) => {
    //     return (accumulator[currentValue.title[0]] ??= []).push(currentValue), accumulator
    //   }, initialValue
    // );
    
  
    // const modelsObj = Object.values(sumWithInitial);
    
    // const rendermodelLists = modelsObj.map((modelsList: any, i: number) => {
    //   return (
    //     <ul className="footer__models-list" key={`models-list_${i}`}>
    //       {
    //         modelsList.map((model: any) => {
    //           return (
    //             <li className="footer__models-item" key={`models-list_${model.title}}`}>
    //               <Link className="footer__models-link" to={`/brands/${model.slug}`}>{model.title}</Link>
    //             </li>
    //           )
    //         })
    //       }
    //     </ul>
    //   )
    // });
  

    return (
        <Layout location={location}>
            <SEO
                title="Brands"
                description='Brands'
            />
            <h1>Hello from the server!</h1>
            <pre>{JSON.stringify(clientResults, null, 2)}</pre>

            <h1>Hello from the server!</h1>
            <pre>{JSON.stringify(serverData, null, 2)}</pre>
            <h1>Hello from the server!</h1>
            <pre>{JSON.stringify(data.allStaticResults.nodes, null, 2)}</pre>
            {/* {rendermodelLists} */}
        </Layout>
    )
}

export default Page



export const query = graphql`
 query {
   allStaticResults {
     nodes {
       value
       date
     }
   }
 }
`;

export async function getServerData() {
  
    const util = require('../../utils/shared-function.ts');
    try {
      const response = await util();

      // return {
      //   props: await getBrandsServerSide(),
      //   status: 200,
      // };
      return {
        props:  response.data,
        status: 200,
      };
    } catch {
      return {
        articles: [],
        status: 500,
      };
    }
  }




//   import React, { useState, useEffect } from 'react';

// const Page = ({ serverData }) => {
//   const [clientResults, setClientResults] = useState();

//   const getClientData = async () => {
//     const response = await fetch('/api/demo');
//     const results = await response.json();
//     setClientResults(results.data);
//   };

//   useEffect(() => {
//     getClientData();
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(clientResults, null, 2)}</pre>
//       <pre>{JSON.stringify(serverData.serverResults, null, 2)}</pre>
//     </div>
//   );
// };

// export async function getServerData() {
//   const response = await fetch('/api/demo');
//   const results = await response.json();

//   return {
//     props: {
//       serverResults: results.data
//     }
//   };
// }

// export default Page;