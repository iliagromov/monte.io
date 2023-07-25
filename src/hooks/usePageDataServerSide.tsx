import { makeRequest } from "../utils/makeRequest";
import PageDataSSR from '../../PageDataSSR.json';


export async function getPageDataServerSide(slug) {
    // const url = 'https://montetuning.app';
    // const modelsResponse = await makeRequest(`${url}/api/v1/models/?make=${slug}&limit=999`);
    
    const pageMetadata = PageDataSSR.brands.find(item=>item.slug===slug);


    // const dedupeMap = new Map(
    //     articles.articles.map((item) => [item.slug.current, item])
    //   );
  
    //   dedupeMap.delete(article.slug.current);
  
    //   const filteredArticles = Array.from(dedupeMap.values());

      
    return pageMetadata;
}
