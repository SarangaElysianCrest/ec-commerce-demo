import {Auth} from 'aws-amplify';
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';

export async function loginUser(email,password) {
    try {
        return await Auth.signIn(email,password)
        .then(res=>{
            return res;
        })
    } catch (error) {
        throw error
    }
}

export async function logoutUser() {
    try {
        return await Auth.signOut();
        window.localStorage.clear();
    } catch (error) {
        throw error
    }
}

export async function loginWithGoogle() {
    try {
        return await Auth.federatedSignIn({provider: 'Google'})
    }catch (error) {
        throw error
    }
}

export async function loginWithFacebook() {
    try {
        return await Auth.federatedSignIn({provider: 'Facebook'})
    }catch (error) {
        throw error
    }
}

export async function signup(email,password) {
    try {
        return await Auth.signUp({
            username:email,
            password: password,
            attributes:{
                email: email
            }
        })
        .then(res=>{
            return res;
        })
    } catch (error) {
        throw error;
    }
}

export async function confirmSignup(username,code) {
    try{
        return await Auth.confirmSignUp(username,code);
    }catch (error) {
        throw error;
    }
}

export async function sendPasswordResetCode(username) {
    try{
        return await Auth.forgotPassword(username)
    }catch (error){
        throw error;
    }
}

export async function confirmPasswordResetCode(email, code, new_password) {
    try{
        return await Auth.forgotPasswordSubmit(email,code, new_password)
    }catch (error){
        throw error;
    }
}

export async function createUser(user) {
    try{
        let response  = await axios.post(API_BASE + '/user', user);
        console.log(response)
        return response
    }catch (error) {
        throw error;
    }
}