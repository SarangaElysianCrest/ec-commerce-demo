import * as API from './auth-api';
import * as mockAPI from './auth-mock-api';

let  api = API;

// if (process.env.REACT_APP_STAGE === 'development') {
//     api = mockAPI;
// } else {
//     api = API;
// }

export default api;