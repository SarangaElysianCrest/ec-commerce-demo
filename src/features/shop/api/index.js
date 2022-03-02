import * as API from './shop-api';
import * as mockAPI from './shop-mock';

let api;

if (process.env.REACT_APP_STAGE === 'development') {
    api = API;
} else {
    api = mockAPI;
}

export default api;