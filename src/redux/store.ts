import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import counterSlice from "./slices/counter/counterSlice";
import cartSlice from "./slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    counter: counterSlice,
    carts: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
