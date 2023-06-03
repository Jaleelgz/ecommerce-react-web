import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../constants/constants";

const defaultState = Products;

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    value: defaultState,
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    addProductToCart: (state, action) => {
      const updatedProducts = state.value.map((product) => {
        if (product.name === action.payload?.name) {
          return { ...product, stock: Number(product.stock) - 1 };
        } else {
          return product;
        }
      });
      state.value = updatedProducts;
    },
    removeProductFromCart: (state, action) => {
      const updatedProducts = state.value.map((product) => {
        if (product.name === action.payload?.name) {
          return { ...product, stock: Number(product.stock) + 1 };
        } else {
          return product;
        }
      });
      state.value = updatedProducts;
    },
    clearProducts: (state) => {
      state.value = defaultState;
    },
  },
});

export const {
  setProducts,
  addProductToCart,
  removeProductFromCart,
  clearProducts,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
