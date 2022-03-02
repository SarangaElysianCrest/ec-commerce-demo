import {Auth} from 'aws-amplify';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE || 'http://localhost:8080';



export async function currentUser() {
    try {
        return await Auth.currentAuthenticatedUser()
    }catch (error) {
        throw error;
    }
}
export async function changePassword(user,oldPassword,newPassword){
    try{
        Auth.currentAuthenticatedUser()
            .then(user => {
                return Auth.changePassword(user,oldPassword,newPassword);
            })
    }catch (error) {
        throw error;
    }


}

export async function  getUserData(uid) {
    try {
        return (await axios.get(BASE_URL + `/user/${uid}`) ).data
    }catch (error) {
        throw error;
    }
}

export const getUserByEmail = (email) => {
    try {
        return fetch(BASE_URL + `/user/query/?email=${email}`).data;
    }catch (error) {
        throw error;
    }
}

export async function updateUserData(user,uid) {
    try{
        let response  = await axios.put(BASE_URL + `/user/${uid}`, user);
        return response
    }catch (error) {
        throw error;
    }
}


export async function getOrderByUserId(uid){
    try{
        let response  = await axios.get(BASE_URL + `/order/id?userId=${uid}`);
        return response
    }catch (error) {
        throw error;
    }
}

export async function getOrderByOrderId(id){
    try{
        let response  = await axios.get(BASE_URL + `/order/id?id=${id}`);
        return response
    }catch (error) {
        throw error;
    }
}