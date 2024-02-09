import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productAPI";

const initialState = {
  status: "idle",
  products: [],
  selectedProduct: null,
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    // console.log(response.data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectProductById = (state) => state.product.selectedProduct;

export default productSlice.reducer;
