import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from './api/product-api';

export const getProductsById = createAsyncThunk(
    'product/getProductsById',
    async ({id}) => {
        try {
            let result =  await api.getProductById(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
)

export const getProductsBySKU = createAsyncThunk(
    'product/getProductsBySKU',
    async ({sku}) => {
        console.log(sku)
        try {
            let result =  await api.getProductBySKU(sku);
            console.log(result)
            return result;
        } catch (error) {
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
    product: null,
}

const slice = createSlice({
    initialState: initState,
    name: 'product',
    reducers:{

    },
    extraReducers:{
        [getProductsById.pending]: state => {
            state.loading = true;
        },
        [getProductsById.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.product = payload.data.data;

        },
        [getProductsById.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
        [getProductsBySKU.pending]: state => {
            state.loading = true;
        },
        [getProductsBySKU.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.product = payload.data.data;

        },
        [getProductsBySKU.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
    }
})



export default slice.reducer;