import { dataType } from "@/types/type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialType {
  data: dataType[];
  item: dataType;
  categories: string[];
  dataLoading: boolean;
  dataError: string | undefined;
}

const initialState: initialType = {
  data: [],
  item: {},
  categories: [],
  dataLoading: false,
  dataError: "" || undefined,
};

export const getProducts = createAsyncThunk(
  "dataSlice/getProducts",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getİtem = createAsyncThunk(
  "dataSlice/getİtem",
  async (id: number) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCategory = createAsyncThunk(
  "dataSlice/getCategory",
  async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.dataLoading = true;
        state.dataError = "";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.dataError = action.error ? action.error.message : "Unkown error";
        state.dataLoading = false;
      })
      .addCase(getİtem.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(getİtem.fulfilled, (state, action) => {
        state.item = action.payload;
        state.dataLoading = false;
      })
      .addCase(getİtem.rejected, (state, action) => {
        state.dataError = action.error ? action.error.message : "Unkown error";
        state.dataLoading = false;
      })
      .addCase(getCategory.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.dataLoading = false;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.dataError = action.error ? action.error.message : "Unkown error";
        state.dataLoading = false;
      });
  },
});

export default dataSlice.reducer;
