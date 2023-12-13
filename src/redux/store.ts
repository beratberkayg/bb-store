import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import counterSlice from "./slices/counter/counterSlice";
import cartSlice from "./slices/cart/cartSlice";
import authSlice from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    counter: counterSlice,
    carts: cartSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
