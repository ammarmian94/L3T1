import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchBrands,
  fetchCategories,
  fetchFeaturedProducts,
  fetchProductById,
  fetchProducts,
} from "./productAPI";

const initialState = {
  status: "idle",
  products: [],
  brands: [],
  categories: [],
  featuredProducts: [],
  selectedProduct: null,
  totalItems: 0,
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProducts(filter, sort, pagination);
    return response.data;
  }
);

export const fetchFeaturedProductsAsync = createAsyncThunk(
  "product/fetchFeaturedProducts",
  async () => {
    const response = await fetchFeaturedProducts();
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  "product/fetchCategories",
  async () => {
    const response = await fetchCategories();
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
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchFeaturedProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.featuredProducts = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchBrandsAsync.pending, (state, action) => {
        state.status = "idle";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state, action) => {
        state.status = "idle";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectFeaturedProducts = (state) => state.product.featuredProducts;

export default productSlice.reducer;
