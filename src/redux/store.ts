import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import modalSlice from "./slices/modal/modalSlice";
import counterSlice from "./slices/counter/counterSlice";
import cartSlice from "./slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    counter: counterSlice,
    carts: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
