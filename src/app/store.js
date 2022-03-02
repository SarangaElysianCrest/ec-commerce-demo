import { configureStore, ThunkAction, Action, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore, 
  persistReducer,
  FLUSH, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER, 
  REHYDRATE

} from 'redux-persist'
import authReducer from '../features/auth/authSlice';
import shopReducer from '../features/shop/shopSlice';
import cartReducer from '../features/cart/cartSlice';
import profileReducer from '../features/profile/profileSlice';
import productReducer from '../features/product/productSlice'
import storage from 'redux-persist/lib/storage';
import checkoutReducer from '../features/checkout/checkoutSlice';
import wishlistReducer from '../features/wishlist/wishlishSlice';
import compareReducer from  '../features/compare/compareSlice';
import reviewReducer from  '../features/review/reviewSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}


 const combinedReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  cart: cartReducer,
  profile: profileReducer,
  product: productReducer,
  checkout:checkoutReducer,
  wishlist:wishlistReducer,
  compare:compareReducer,
  review:reviewReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled'){
    storage.removeItem('persist:root')
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};


const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  })  
});

export const persistedStore = persistStore(store);


