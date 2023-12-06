import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  userModal: boolean;
  shopModal: boolean;
}

const initialState: stateType = {
  userModal: false,
  shopModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    userFunc: (state) => {
      state.userModal = !state.userModal;
      state.shopModal = false;
    },
    shopFunc: (state) => {
      state.shopModal = !state.shopModal;
      state.userModal = false;
    },
  },
});

export const { userFunc, shopFunc } = modalSlice.actions;

export default modalSlice.reducer;
