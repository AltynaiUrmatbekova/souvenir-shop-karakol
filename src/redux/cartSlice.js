import { createSlice } from "@reduxjs/toolkit";

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
    }
  }
});

export default cartSlice.reducer;

