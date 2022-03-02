import { createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],
  alert: {
    message: null,
    severity: null,
    show: false,
  },
};

const compareSlice = createSlice({
  initialState: initState,
  name: "compare",
  reducers: {
    resetCompareAlert(state) {
      state.alert = {
        message: null,
        severity: null,
        show: false,
      };
    },
    addToCompare(state, { payload }) {
      let sku = state.items.findIndex((item) => {
        return item.sku === payload.sku;
      });
      if (sku === -1) {
        state.items = [...state.items, payload];
        state.alert = {
          message: "Item Added to Compare",
          severity: "success",
          show: true,
        };
      } else {
        state.alert = {
          message: "This item is already in the compare.",
          severity: "error",
          show: true,
        };
      }
    },
    clearCompare(state) {
      state.items = [];
      state.alert = {
        message: "All items Removed from compare",
        severity: "success",
        show: true,
      };
    },
    removeFromCompare(state, { payload }) {
      let sku = state.items.findIndex((item) => {
        return item.sku === payload.sku;
      });
      if (sku !== -1) {
        let copyOfItems = [...state.items];
        copyOfItems.splice(sku, 1);
        state.items = [...copyOfItems];
        state.alert = {
          message: "Compare List Item Cleared",
          severity: "success",
          show: true,
        };
      } else {
        state.alert = {
          message: "Item not found in compare list.",
          severity: "warn",
          show: true,
        };
      }
    },
  },
});

export const {
  resetCompareAlert,
  addToCompare,
  clearCompare,
  removeFromCompare,
} = compareSlice.actions;

export default compareSlice.reducer;
