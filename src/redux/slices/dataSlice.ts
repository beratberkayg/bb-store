import { dataType } from "@/types/type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialType {
  data: dataType[];
  dataLoading: boolean;
  dataError: string | null | undefined;
}

const initialState: initialType = {
  data: [],
  dataLoading: false,
  dataError: "" || null,
};

export const getData = createAsyncThunk("dataSlice/getData", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.dataLoading = true;
        state.dataError = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataLoading = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.dataError = action.error ? action.error.message : "Unkown error";
        state.dataLoading = false;
      });
  },
});

export default dataSlice.reducer;
