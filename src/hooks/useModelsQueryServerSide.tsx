import { makeRequest } from "../utils/makeRequest";


export async function getModelsServerSide(slug) {
    const url = 'https://montetuning.app';
    const modelsResponse = await makeRequest(`${url}/api/v1/models/?make=${slug}&limit=999`);


    const pageMetadata = modelsResponse.results;

    return { pageMetadata };
}
