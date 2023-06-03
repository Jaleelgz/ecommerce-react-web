import { createSlice } from "@reduxjs/toolkit";

const defaultState = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    value: defaultState,
  },
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addToCart: (state, action) => {
      const isProductExisting = state.value?.find(
        (cartItem) => cartItem.name === action.payload?.name
      );

      if (isProductExisting) {
        const updatedProducts = state.value.map((product) => {
          if (product.name === action.payload?.name) {
            return {
              ...product,
              quantity: Number(product.quantity) + 1,
            };
          } else {
            return product;
          }
        });
        state.value = updatedProducts;
      } else {
        state.value.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const isProductExisting = state.value?.find(
        (cartItem) => cartItem.name === action.payload?.name
      );

      if (Number(isProductExisting.quantity) <= 1) {
        state.value = state.value?.filter(
          (cartItem) => cartItem.name !== isProductExisting.name
        );
      } else {
        const updatedProducts = state.value.map((product) => {
          if (product.name === isProductExisting?.name) {
            return {
              ...product,
              quantity: Number(product.quantity) - 1,
            };
          } else {
            return product;
          }
        });
        state.value = updatedProducts;
      }
    },
    clearAllCart: (state) => {
      state.value = defaultState;
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearAllCart } =
  CartSlice.actions;

export default CartSlice.reducer;
