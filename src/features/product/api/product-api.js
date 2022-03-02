import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';
const PRODUCT_API = API_BASE + '/product';

export async function getProductById(id) {
    try {
        return await axios.get(PRODUCT_API + `/${id}`)
    }catch (e) {
        throw e;
    }
}

export async function getProductBySKU(sku) {
    try {
        return await axios.post(PRODUCT_API + '/sku', {sku:sku})
    }catch (e) {
        throw e;
    }
}
