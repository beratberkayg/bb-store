import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import modalSlice from "./slices/modal/modalSlice";
import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
