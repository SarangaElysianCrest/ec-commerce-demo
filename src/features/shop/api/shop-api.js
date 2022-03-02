import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';
const PRODUCT_API = API_BASE + '/product';
const CAT_API = API_BASE + '/category';
const SCAT_API = API_BASE + '/subcategory';
const TAG_API = API_BASE + '/tag';

export async function getProductsByQuery(queries=[], limit, offset=0,search) {
    try {
        let queriesWithPagination = [...queries, limit?`limit=${limit}`:'limit=8', offset?`offset=${offset}`:'offset=0',search?`search=${search}`:null];
        let queryString = queriesWithPagination.join('&');
        return (await axios.get(PRODUCT_API + '/query?' + queryString)).data;
    } catch (error) {
        throw error;
    }
};


export async function getSortBYProducts(orderBy,orderDir,catId,subCatId,limit,offset,search) {
    try {
        return await getProductsByQuery([`order=${orderBy},${orderDir}&categoryId=${catId}&subCategoryId=${subCatId}`],limit,offset,search);
    } catch (error) {
        throw error;
    }
};


export async function getProductsByCategory(category,orderBy,orderDir,limit = 20,offset) {
    try {
        return await getProductsByQuery([`categoryId=${category}&order=${orderBy},${orderDir}`],limit,offset)
    } catch (error) {
        throw error;
    }
};

export async function getProductsBySubCategory(subCategory,limit,offset) {
    try {
        return await getProductsByQuery([`subCategoryId=${subCategory}`],limit,offset);
    } catch (error) {
        throw error;
    }
};

export async function getProductsByAttributes(attributes = [],limit,offset) {
    try {
        let attributeString = attributes; // To be changed.
        return await getProductsByQuery([`attributes=${attributeString}`],limit,offset);
    } catch (error) {
        throw error;
    }
}




export async function getCategories(){
    try {
       let result =  (await axios.get(CAT_API + '/query')).data;
       return result
    } catch (error) {
        throw error;
    }
};

export async function getSubCategories(category){
    try {
        return (await axios.get(SCAT_API + '/query?categoryId='+category)).data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getTags(){
    try {
        return (await axios.get(TAG_API + '/query')).data;
    } catch (error) {
        throw error;
    }
};

export async function getSubCategoriesByCategory(categoryId){
    try{
        return await axios.post(SCAT_API+'/query/category',categoryId)
    }catch (error) {
        throw error;
    }
}