import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkout = createAsyncThunk('cart/checkout', async (order, thunkAPI) => {
  const response = await axios.post('https://souvenir-shop-karakol-default-rtdb.firebaseio.com/orders.json', order);

  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems') ?? '{}'),
  },
  reducers: {
    add: (store, action) => {
      if (store.items[action.payload]) {
        store.items[action.payload]++;
      }
      else {
        store.items[action.payload] = 1;
      }
    },
    remove: (store, action) => {
      delete store.items[action.payload];
    },
    increment: (store, action) => {
      store.items[action.payload]++;
    },
    decrement: (store, action) => {
      if (store.items[action.payload] > 1) {
        store.items[action.payload]--;
      }
      else {
        delete store.items[action.payload];
      }
    }
  },
  extraReducers: {
    [checkout.fulfilled]: (state, action) => {
      console.log(action);
      state.items = {};
    }
  }
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;