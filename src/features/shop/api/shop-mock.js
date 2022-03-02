
export async function getProductsByQuery(queries=[], limit=8, offset=0) {
    try {
      
    } catch (error) {
        throw error;
    }
};

export async function getProductsByCategory(category,limit,offset) {
    try {
        return await getProductsByQuery([`categoryId=${category}`],limit,offset)
    } catch (error) {
        throw error;
    }
};

export async function getProductsBySubCategory(subCategory,limit,offset) {
    try {
        return await getProductsByQuery([`subCategoryId=${subCategory}`],limit,offset);
    } catch (error) {
        
    }
};

export async function getProductsByAttributes(){
    
}

export async function getCategories(){

};

export async function getSubCategories(category){

};