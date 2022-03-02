import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from './api/shop-api';

export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async ({limit,offset,order,direction}) => {
        try {
            return await api.getProductsByQuery([`order=${order},${direction}`],limit,offset)
        } catch (error) {
            throw error;
        }
    }
)
export const getProductsByCategory = createAsyncThunk(
    'shop/getProductsByCategory',
    async ({id,orderBy,orderDir,limit,offset}) => {
        try {
            return await api.getProductsByCategory(id,orderBy,orderDir,limit,offset);
        } catch (error) {
            throw error;
        }
    }
);
export const getProductsBySubCategory = createAsyncThunk(
    'shop/getProductsBySubCategory',
    async ({id,limit,offset}) => {
        try {
            return await api.getProductsBySubCategory(id,limit,offset);
        } catch (error) {
            throw error;
        }
    }
);

export const getProductsSortBy =  createAsyncThunk(
    'shop/getProductsSortBy',
    async ({order,direction,catId,subCatId,limit,offset,search}) =>{
        try{
            return  await api.getSortBYProducts(order,direction,catId,subCatId,limit,offset,search)
        }catch (error) {
            throw error;
        }
    }
)
export const getProductsByAttributes = createAsyncThunk(
    'shop/getProductsByAttributes',
    async ({attributes,limit,offset}) => {

    }
);
export const getCategories = createAsyncThunk(
    'shop/getCategories',
    async () => {
        try {
            let result = await api.getCategories();

            return result
        } catch (error) {
            throw error;
        }
    }
);
export const getSubCategories = createAsyncThunk(
    'shop/getSubCategories',
    async (category) => {
        try {
            return await api.getSubCategories(category);
        } catch (error) {
            throw error;
        }
    }
);

export const getSubCategoriesByCategories = createAsyncThunk(
    'shop/getSubCategoriesByCategories',
    async (categoryId) =>{
        try{
            return await api.getSubCategoriesByCategory(categoryId)
        }catch (error) {
            throw error
        }
    }
)

export const getTags = createAsyncThunk(
    'shop/getTags',
    async ()=>{
        try {
            let result = await api.getTags();
            return result;
        }catch (error) {
            throw error;
        }
    }
)

const initState = {
    loading: false,
    alert: {
        message: null,
        severity: null,
        show: false,
    },
    categories: [], // Will hold both categories and sub-categories 
    sortBys:[],
    tags:[],
    current:{
        limit: 0,
        offset: 0,
        products: [],
        total: null,
        category: null,
        subCategory: null,
        search:null,
        filters:[],
        order:'price',
        direction:'ASC',
    },
}
const slice = createSlice({
    initialState: initState,
    name: 'shop',
    reducers:{
        setCurrentCategory(state,{payload}) {
            state.current.category = payload;
        },
        setCurrentSubCategory(state,{payload}) {
            state.current.subCategory = payload;
        },
        setCurrentSort(state, {payload}){
            state.current.order = payload.order
            state.current.direction = payload.direction;
        },
        clearCurrent(state){
            state.current.category = null;
            state.current.subCategory = null;
            state.current.sort = null;
            // state.current.limit = null;
            // state.current.offset = null;
        },
        setCurrentLimit(state,{payload}) {
            state.current.limit = payload;
        },
        setOffset(state,{payload}) {
            state.current.offset = payload;
        },
        setCurrentSearch(state,{payload}) {
            state.current.search = payload;
        },
        setClearAllData(state){
            state.current.sort = null;
            state.current.limit = null;
            state.current.search =null;
            state.current.offset = null
        },
    },
    extraReducers:{
        [getProducts.pending]: state => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.current.products = payload.data.results;
            state.current.total = payload.data.totalCount;
        },
        [getProducts.rejected]: (state, {error}) => {
            state.loading = false;
            // ....
        },

        [getCategories.pending]: state=>{
            state.loading = true;
        },
        [getCategories.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.categories = payload.data;
        },

        [getCategories.rejected]: (state,{error}) => {
            state.loading = false;
            // .....
        },

        [getProductsByCategory.pending]: state => {
            state.loading = true;
        },
        [getProductsByCategory.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.current.products = payload.data.results;
            state.current.total = payload.data.totalCount;
        },
        [getProductsByCategory.rejected]: (state,{error}) => {
            state.loading = false
            // ....
        },


        [getSubCategoriesByCategories.pending]: state => {
            state.loading = true;
        },

        [getSubCategoriesByCategories.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.categories = payload.data.data.result;
        },

        [getProductsBySubCategory.pending]: state => {
            state.loading = true;
        },
        [getProductsBySubCategory.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.current.products = payload.data.results;
            state.current.total = payload.data.totalCount;
        },
        [getProductsBySubCategory.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },

        [getTags.pending]: state => {
            state.loading = true;
        },
        [getTags.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.tags = payload.data;
        },


        [getProductsSortBy.pending]: state => {
            state.loading = true;
        },
        [getProductsSortBy.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.current.products = payload.data.results;
            state.current.total = payload.data.totalCount;
        },
        [getProductsSortBy.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
    }
})

export const {setCurrentCategory,setCurrentSubCategory,setCurrentSort, clearCurrent, setCurrentLimit, setOffset,setCurrentSearch, setClearAllData} = slice.actions;

export default slice.reducer;