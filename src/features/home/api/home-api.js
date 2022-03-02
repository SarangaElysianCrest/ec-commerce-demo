import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';
const PRODUCT_API = API_BASE + '/product';
const CAT_API = API_BASE + '/category';
const SCAT_API = API_BASE + '/subcategory';
const TAG_API = API_BASE + '/tag';

export async function getProductsByQuery(queries=[], limit=8, offset=0) {
    try {
        let queriesWithPagination = [...queries, limit?`limit=${limit}`:'limit=8', offset?`offset=${offset}`:'offset=0'];
        let queryString = queriesWithPagination.join('&');
        return (await axios.get(PRODUCT_API + '/query?' + queryString)).data;
    } catch (error) {
        throw error;
    }
};


export async function getSortBYProducts(orderBy,orderDir,limit,offset) {
    try {
        return await getProductsByQuery([`order=${orderBy},${orderDir}`],limit,offset);
    } catch (error) {
        throw error;
    }
};