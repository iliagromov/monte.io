import { makeRequest } from "../utils/makeRequest";


export async function getBrandsServerSide() {
    const url = 'https://montetuning.app';
    const brandsResponse = await makeRequest(`${url}/api/v1/makes`);


    const pageMetadata = brandsResponse.results;

    return { pageMetadata };
}
