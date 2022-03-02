import { createSlice } from "@reduxjs/toolkit";

const initState = {
    items: [],
    alert: {
        message: null,
        severity: null,
        show: false,
    },
};

const  wishlistSlice  = createSlice({
    initialState: initState,
    name: 'wishlist',
    reducers: {
        resetWhisListAlert(state) {
            state.alert = {
                message: null,
                severity: null,
                show: false,
            }
        },
        addToWhishList(state, {payload}) {
            let sku = state.items.findIndex((item) => {
                return item.sku === payload.sku;
            });
            if (sku === -1) {
                state.items = [...state.items, payload];
                state.alert = {
                    message: 'Item Added to WishList',
                    severity: 'success',
                    show: true
                }
            } else {
                state.alert = {
                    message: 'This item is already in the wishlist.',
                    severity: 'error',
                    show: true
                };
            }
        },
        clearWishList(state) {
            state.items = []
            state.alert = {
                message: 'All items Removed from wishlist',
                severity: 'success',
                show: true
            }
        },
        removeFromWishList(state, {payload}) {
            let sku = state.items.findIndex((item) => {
                return item.sku === payload.sku;
            });
            if (sku !== -1) {
                let copyOfItems = [...state.items];
                copyOfItems.splice(sku, 1);
                state.items = [...copyOfItems];
                state.alert = {
                    message: 'Wish List Cleared',
                    severity: 'success',
                    show: true
                }
            } else {
                state.alert = {
                    message: 'Item not found in cart.',
                    severity: 'warn',
                    show: true
                }
            }
        },
    }

})

export const {addToWhishList, resetWhisListAlert, clearWishList, removeFromWishList} = wishlistSlice.actions;

export default wishlistSlice.reducer;