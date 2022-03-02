import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './api';

const initState = {
    loading: false,
    alert: {
        show: false,
        message: null,
        severity: null,
    },
    user: {
        username: null,
        email:null,
    },
    session: {
        accessToken: null,
        refreshToken: null
    },
    isUnconfirmed:false,
    permissions: [],
    isForgotPassword:false,
    forgotPasswordEmail:null,
    verified:false,
}

console.log(initState)

export const login = createAsyncThunk(
    'auth/login',
    async ({email,password}) => {
        try{
            return await api.loginUser(email,password);
        } catch (error) {
           throw error;
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try{
            let result = await api.logoutUser();
            return result;
        } catch (error) {
            throw error;
        }
    }
);

export const loginWithGoogle = createAsyncThunk(
    'auth/loginWithGoogle',
    async () => {
        try {
            let result =  await api.loginWithGoogle();
            console.log(result)
            return result
        }catch (error) {
            throw error;
        }
    }
);

export const loginWithFacebook = createAsyncThunk(
    'auth/loginWithFacebook',
    async () => {
        try {
            let result =  await api.loginWithFacebook();
            console.log(result)
            return result
        }catch (error) {
            throw error;
        }
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({email,password}) => {
        try {
            let result =  await api.signup(email,password);
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
);

export const confirmSignUp = createAsyncThunk(
    'auth/confirmSignUp',
    async ({username,code,email}) => {
        try {
            let result = await api.confirmSignup(username,code);
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
);


export const forgotPasswordCodeSend = createAsyncThunk(
    'auth/forgotPasswordCodeSend',
    async (username) => {
        try{
            let result =  await api.sendPasswordResetCode(username);
            return result;
        }catch (error) {
            throw error;

        }

    }
);

export const forgotPasswordSubmission = createAsyncThunk(
    'auth/forgotPasswordSubmission',
    async ({email,code, new_password}) => {
        try{
            let result =  await api.confirmPasswordResetCode(email,code,new_password);
            console.log(result)
            return result;
        }catch (error) {
            throw error;

        }

    }
);


export const createUser = createAsyncThunk(
    'auth/createUser',
    async (user)=>{
        console.log(user)
        try {
            let result = await api.createUser(user)
            console.log(result)
        }catch (error) {
            throw error;
        }
    }
);


const slice = createSlice({
    initialState: initState,
    name: 'auth',
    reducers: {
        resetAlert(state) {
            state.alert = {
                message: null,
                severity: null,
                show: false,
            }
        },
        setForgotPasswordEmail(state,{payload}){
            state.forgotPasswordEmail = payload;
        },
        setIsUnConfirmed(state){
            state.isUnconfirmed = null
        },
    },
    extraReducers:{
        [login.pending]: state => {
            state.loading = true;
        },
        [login.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.user = {
                username: payload.userSub
            };
            state.session = {
                accessToken: payload.signInUserSession?.idToken,
                refreshToken: payload.signInUserSession?.refreshToken,
            };
            state.alert = {
                message: 'You have successfully logged in.',
                severity: 'success',
                show:true
            };
        },
        [login.rejected]: (state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },
        [signUp.pending]: state => {
            state.loading = true;
        },
        [signUp.fulfilled]: (state,{payload}) => {
            state.loading = false;
            state.isUnconfirmed = true;
            state.user = {
                username: payload.userSub,
                email: payload.user.username,
            };
            state.alert = {
                message: 'Account Created. Please confirm your account with the confirmation code we\'ve sent to your email.',
                severity: 'success',
                show:true
            };
        },
        [signUp.rejected]: (state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },
        [confirmSignUp.pending]: (state) => {
            state.loading = true;
        },
        [confirmSignUp.fulfilled]: (state,{payload}) => {
            console.log(payload)
            state.loading = false;
            state.isUnconfirmed = false;
            state.verified = "true";
            // TODO: Save user data in to the state.
            state.alert = {
                message: 'Account verification successful. Please Login',
                severity: 'success',
                show:true
            };
        },
        [confirmSignUp.rejected]: (state,{error}) => {
            console.log("not sign up ")
            state.loading = false;
            state.isUnconfirmed = true;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },

        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state,{payload}) => {
            console.log(payload)
            state.loading = false;
            state.isUnconfirmed = false;
            state.verified = "done";
        },
        [createUser.rejected]: (state,{error}) => {
            console.log("not sign up ")
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },
        // .....
        [logout.pending]: state => {
            state.loading = true;
        },
        [logout.fulfilled]: state => {
            state.loading = false;
            state.user = {
                username: null
            };
            state.session = {
                accessToken: null,
                refreshToken: null
            };
            state.alert = {
                message: 'You are now logged out.',
                severity: 'info',
                show:true
            };
        },
        [logout.rejected]: (state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },

        [forgotPasswordCodeSend.pending]: state => {
            state.loading = true;
        },
        [forgotPasswordCodeSend.fulfilled]:(state,{payload}) => {
            console.log(payload)
            state.loading = false;
            state.isForgotPassword = true;
            state.alert = {
                message: 'Please check your email.',
                severity: 'info',
                show:true
            };
        },
        [forgotPasswordCodeSend.rejected]: (state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },
        [forgotPasswordSubmission.pending]: state => {
            state.loading = true;
        },
        [forgotPasswordSubmission.fulfilled]: state => {
            state.loading = false;
            state.isForgotPassword = false;
            state.forgotPasswordEmail = null;
            state.alert = {
                message: 'Password reset successfully.',
                severity: 'info',
                show:true
            };
        },
        [forgotPasswordSubmission.rejected]: (state, {error}) => {
            state.loading = false;
            state.alert = {
                message: error.message,
                severity: 'error',
                show:true
            };
        },

    }
});

export const {resetAlert,setForgotPasswordEmail,setIsUnConfirmed}  = slice.actions;


export default slice.reducer;