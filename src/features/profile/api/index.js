import * as API from './profile-api';
import * as mockAPI from './profile-mock-api';

let api=API;

// if (process.env.REACT_APP_STAGE === 'development') {
//     api = mockAPI;
// } else {
//     api = API;
// }

export default api;