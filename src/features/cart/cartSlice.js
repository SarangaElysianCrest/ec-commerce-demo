import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../checkout/api/checkout-api";
import { createCheckout } from "../checkout/checkoutSlice";

const initState = {
  items: [],
  alert: {
    message: null,
    severity: null,
    show: false,
  },
  coupon: null,
  total: 0,
};

const cartSlice = createSlice({
  initialState: initState,
  name: "cart",
  reducers: {
    resetCartAlert(state) {
      state.alert = {
        message: null,
        severity: null,
        show: false,
      };
    },
    setCartTotal(state, { payload }) {
      state.total = payload;
    },
    addToCart(state, { payload }) {
      let sku = state.items.findIndex((item) => {
        return item.sku === payload.sku;
      });
      console.log(sku);
      if (sku === -1) {
        state.items = [...state.items, payload];
        state.alert = {
          message: "Item Added to Cart",
          severity: "success",
          show: true,
        };
      } else {
        state.alert = {
          message: "This item is already in the cart.",
          severity: "error",
          show: true,
        };
      }
    },
    changeItemQty(state, { payload }) {
      let sku = state.items.findIndex((item) => {
        return item.sku === payload.sku;
      });
      console.log(sku !== -1);
      if (sku !== -1) {
        let copyOfItems = [...state.items];
        copyOfItems[sku].quantity = payload.quantity;

        state.items = [...copyOfItems];
        state.alert = {
          message: "Item Changed from cart",
          severity: "success",
          show: true,
        };
      } else {
        state.alert = {
          message: "Item not found in cart.",
          severity: "warn",
          show: true,
        };
      }
      state.coupon = null;
    },
    removeFromCart(state, { payload }) {
      let sku = state.items.findIndex((item) => {
        return item.sku === payload.sku;
      });
      if (sku !== -1) {
        let copyOfItems = [...state.items];
        copyOfItems.splice(sku, 1);
        state.items = [...copyOfItems];
        state.alert = {
          message: "Cart Cleared",
          severity: "success",
          show: true,
        };
      } else {
        state.alert = {
          message: "Item not found in cart.",
          severity: "warn",
          show: true,
        };
      }
      state.coupon = null;
    },
    clearCart(state) {
      state.items = [];
      state.coupon = null;
      state.alert = {
        message: "All items Removed from cart",
        severity: "success",
        show: true,
      };
    },
  },
  extraReducers: {},
});

// Actions
export const {
  addToCart,
  changeItemQty,
  removeFromCart,
  resetCartAlert,
  clearCart,
} = cartSlice.actions;

// Selectors
export const cartItemsSelector = (store) => store.cart.items;

export default cartSlice.reducer;
