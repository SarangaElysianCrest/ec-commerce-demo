import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from './api/checkout-api';
import {getProducts} from "../shop/shopSlice";

export const createCheckout = createAsyncThunk(
    'checkout/createCheckout',
    async ({order}) => {
        try {
            let result = await api.createOrder(order);
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
);

export const getCoupon = createAsyncThunk(
    'checkout/getCoupon',
    async ({coupon}) => {
        try {
            let result = await api.queryCoupon(coupon);
            return result;
        } catch (error) {
            throw error;
        }
    }
);


const initState = {
    loading: false,
    alert: {
        message: null,
        severity: null,
        show: false,
    },
    successState:false,
    checkout:null,
    coupon:null,
}

const checkoutSlice = createSlice({
    initialState: initState,
    name: 'checkout',
    reducers: {
        resetSuccess(state) {
            state.successState  = false
        },
        resetCheckoutAlert(state) {
            state.alert = {
                message: null,
                severity: null,
                show: false,
            }
        },
        resetPromoCode(state){
            state.coupon = null
        }
    },
    extraReducers:{
        [createCheckout.pending]: state => {
            state.loading = true;
        },
        [createCheckout.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.alert = {
                message: 'Checkout succeed',
                severity: 'info',
                show:true
            };
            state.successState = true;
            state.coupon = null;
            // if (payload.data.status === "sucsess"){
            //     state.successState = true;
            // }
        },
        [createCheckout.rejected]: (state, {error}) => {
            state.loading = false;
            state.successState = false;
            if (error.message === "Request failed with status code 400"){
                state.alert = {
                    message: 'Please make sure you are login',
                    severity: 'warning',
                    show:true
                };
            }else{
                state.alert = {
                    message: 'Checkout not succeed',
                    severity: 'error',
                    show:true
                };
            }
        },
        [getCoupon.pending]: state => {
            state.loading = true;
        },
        [getCoupon.fulfilled]: (state,{payload}) => {
            state.loading = false;
            if (payload.data.data.status === "invalid"){
                state.alert = {
                    message: 'Coupon invalid',
                    severity: 'warning',
                    show:true
                };
            }else{
                state.alert = {
                    message: 'Coupon added to total value',
                    severity: 'info',
                    show:true
                };
            }

            state.coupon = payload.data.data
        },
        [getCoupon.rejected]: (state, {error}) => {
            state.loading = false;
            state.successState = false;
            state.alert = {
                message: 'Coupon invalid',
                severity: 'warning',
                show:true
            };
        },
    }
})


export const  {resetSuccess, resetCheckoutAlert,resetPromoCode} = checkoutSlice.actions;
export default checkoutSlice.reducer;