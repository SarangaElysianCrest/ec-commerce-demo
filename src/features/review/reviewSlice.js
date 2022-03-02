import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from './api/review-api';

export const getReviewByProductId = createAsyncThunk(
    'review/getReviewByProductId',
    async ({id,user}) =>{
        try {
            let result = await api.getReviewByProductId(id,user && user);
            return result;
        }catch (error) {
            throw error;
        }
    }
)

export const createReviewByUser = createAsyncThunk(
    'review/createReviewByUser',
    async ({review})=>{
        try {
            let result = await api.createReview(review);
            return result;
        }catch (error) {
            throw  error
        }
    }
)


export const createLikeByUser = createAsyncThunk(
    'review/createLikeByUser',
    async ({like})=>{
        try {
            let result = await api.createLike(like);
            return result;
        }catch (error) {
            throw  error
        }
    }
)

export const deleteLikeByUser = createAsyncThunk(
    'review/deleteLikeByUser',
    async ({like})=>{
        try {
            let result = await api.deleteLike(like);
            return result;
        }catch (error) {
            throw  error
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
    reviews: null,
    likesState:null,
}

const slice = createSlice({
    initialState: initState,
    name: 'review',
    reducers:{
        resetReviewAlert(state) {
            state.alert = {
                message: null,
                severity: null,
                show: false,
            }
        },
        loginWarningAlert(state){
            state.alert = {
                message: 'Please login',
                severity: 'warning',
                show: true,
            }
        },
        resetSuccessLikes(state) {
            state.likesState = false
        },
    },
    extraReducers:{

        [createReviewByUser.pending]: state => {
            state.loading = true;
        },
        [createReviewByUser.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.alert = {
                message: 'You have successfully added review.',
                severity: 'success',
                show:true
            };
        },
        [createReviewByUser.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
        [createLikeByUser.pending]: state => {
            state.loading = true;
        },
        [createLikeByUser.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.loading = false;
            state.likesState = true
            state.alert = {
                message: 'Successfully.',
                severity: 'success',
                show:true
            };
        },
        [createLikeByUser.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
        [deleteLikeByUser.pending]: state => {
            state.loading = true;
        },
        [deleteLikeByUser.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.loading = false;
            state.likesState = true
            state.alert = {
                message: 'Successfully',
                severity: 'success',
                show:true
            };
        },
        [deleteLikeByUser.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
        [getReviewByProductId.pending]: state => {
            state.loading = true;
        },
        [getReviewByProductId.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.reviews = payload.data.data;


        },
        [getReviewByProductId.rejected]: (state, {error}) => {
            state.loading = false;
            // .....
        },
    }
})

export const {resetReviewAlert, loginWarningAlert,resetSuccessLikes} = slice.actions;
export default slice.reducer;