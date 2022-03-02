import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';
const ORDER_API = API_BASE + '/order';
const COUPON_API = API_BASE + '/promo/query';

export async function createOrder(order) {
    try{
        return await axios.post(ORDER_API,order)
    }catch (error) {
        throw error;
    }
}

export async function queryCoupon(coupon){
    try{
        return await axios.post(COUPON_API,coupon)
    }catch (error) {
        throw error;
    }
}