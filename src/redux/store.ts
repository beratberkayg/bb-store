import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import modalSlice from "./slices/modal/modalSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
