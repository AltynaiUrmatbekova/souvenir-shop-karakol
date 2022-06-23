import { createSlice } from "@reduxjs/toolkit";

function saveInStorage(items) {
  localStorage.setItem('cartItems', JSON.stringify(items));
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
    },
  },
  reducers: {
    add: (store, action) => {
      if (store.items[action.payload]) {
        store.items[action.payload]++;
      }
      else {
        store.items[action.payload] = 1;
      }
      saveInStorage(store.items);
    },
    delete: (store, action) => {
      delete store.items[action.payload];
      saveInStorage(store.items);
    },
    increment: (store, action) => {
      store.items[action.payload]++;
      saveInStorage(store.items);
    },
    decrement: (store, action) => {
      if (store.items[action.payload] > 1) {
        store.items[action.payload]--;
      }
      else {
        delete store.items[action.payload];
      }
      saveInStorage(store.items);
    },
    restore: (store, action) => {
      store.items = JSON.parse(localStorage.getItem('cartItems') ?? '{}');
    }
  }
});

export default cartSlice.reducer;

