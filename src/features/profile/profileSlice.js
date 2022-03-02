import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './api/index';


const initState = {
    loading: false,
    alert: {
        show: false,
        message: null,
        severity: null,
    },
    user: null,
    email:null,
    profile: {
        addressLine1: null,
        addressLine2: null,
        city: null,
        province:null,
        postalCode:null,
        createAt: null,
        email:null,
        firstName: null,
        id: null,
        lastName: null,
        phone: null,
        homePhone:null,
        updateAt: null,
    },
    orders:null,
    orderById:null,
}

export const changePassword = createAsyncThunk(
    'profile/changePassword',
    async ({user,oldPassword,newPassword}) => {
        try {
            let result = await api.changePassword(user,oldPassword,newPassword);
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
);

export const currentUser = createAsyncThunk(
    'profile/currentUser',
    async () => {
        try {
            let result = await api.currentUser()
            return result;
        } catch (error) {
            throw error;
        }
    }
);

export const getUserData = createAsyncThunk(
    'profile/getUserData',
    async ({username}) => {
        try {
            let result = await api.getUserData(username)
            return result;
        } catch (error) {
            throw error;
        }
    }
);

export const getOrdersByUserId = createAsyncThunk(
    'profile/getOrdersByUserId',
    async ({uid})=>{
        try{
            let result = await api.getOrderByUserId(uid);
            return result;
        }catch (error) {
            throw error;
        }
    }
)

export const getOrdersByOrderId = createAsyncThunk(
    'profile/getOrdersByOrderId',
    async ({id})=>{
        try{
            let result = await api.getOrderByOrderId(id)
            return result;
        }catch (error) {
            throw error;
        }
    }
)
export const updateUserData = createAsyncThunk(
    'profile/updateUserData',
    async ({id,email,fname,lname,telephone,homePhone, address1,address2,city, province, postalCode})=>{
        try{
            let user={
                id: id,
                email:email,
                firstName:fname,
                lastName:lname,
                phone:telephone,
                homePhone: homePhone,
                addressLine1: address1,
                addressLine2: address2,
                city: city,
                province:province,
                postalCode:postalCode,
            }
            let result = await api.updateUserData(user,id)
            return result.data;
        }catch (error) {
            throw error;
        }
    }
)

const profileSlice = createSlice({
    initialState: initState,
    name: 'profile',
    reducers: {
        resetProfileAlert(state) {
            state.alert = {
                message: null,
                severity: null,
                show: false,
            }
        },
    },
    extraReducers:{
        // change password
        [changePassword.pending]: state => {
            state.loading = true;
        },
        [changePassword.fulfilled]: (state,{payload}) => {
            console.log(payload)
            state.loading = false;
            state.alert = {
                message: 'You have successfully changed the password.',
                severity: 'success',
                show:true
            };
        },
        [changePassword.rejected]: (state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },

        // current user
        [currentUser.pending]: state => {
            state.loading = true;
        },
        [currentUser.fulfilled]: (state,{payload}) => {
            console.log(payload)
            state.loading = false;
            state.user =  payload.username;
            state.email = payload.attributes.email;
        },

        // get user data
        [getUserData.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.profile = {
                addressLine1: payload.data.addressLine1,
                addressLine2: payload.data.addressLine2,
                city: payload.data.city,
                createAt: payload.data.createAt,
                email:payload.data.email,
                firstName: payload.data.firstName,
                id: payload.data.id,
                lastName:payload.data.lastName,
                phone: payload.data.phone,
                homePhone:payload.data.homePhone,
                updateAt: payload.data.updateAt,
                province:payload.data.province,
                postalCode: payload.data.postalCode
            };
        },
        [getUserData.rejected]:(state, {error}) => {
            state.loading = false;
        },


        // updated user data
        [updateUserData.pending]: state => {
            state.loading = true;
        },
        [updateUserData.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.alert = {
                message: 'You have successfully changed the user data.',
                severity: 'success',
                show:true
            };
            state.profile = {
                addressLine1: payload.data.addressLine1,
                addressLine2: payload.data.addressLine2,
                city: payload.data.city,
                createAt: payload.data.createAt,
                email:payload.data.email,
                firstName: payload.data.firstName,
                id: payload.data.id,
                lastName:payload.data.lastName,
                phone: payload.data.phone,
                homePhone:payload.data.homePhone,
                updateAt: payload.data.updateAt,
                province:payload.data.province,
                postalCode: payload.data.postalCode
            };
        },
        [updateUserData.rejected]:(state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },

        [getOrdersByUserId.pending]: state => {
            state.loading = true;
        },
        [getOrdersByUserId.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.orders = payload.data.data.results;
        },
        [getOrdersByUserId.rejected]:(state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },

        [getOrdersByOrderId.pending]: state => {
            state.loading = true;
        },
        [getOrdersByOrderId.fulfilled]: (state,{payload}) => {
            console.log(payload)
            state.loading = false;
            state.orderById = payload.data.data.results[0];
        },
        [getOrdersByOrderId.rejected]:(state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },


    }
});

export const {resetProfileAlert,resetProfileData, resetCurrentUser}  =  profileSlice.actions;


export default  profileSlice.reducer;