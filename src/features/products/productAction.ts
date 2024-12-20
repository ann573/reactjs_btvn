import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAll,
  getProductById,
  removeProduct,
  updateProduct,
  addProduct,
} from "./../../service/product";
import { IProduct } from "./../../interface/IProduct";

export const fetchProduct = createAsyncThunk<IProduct[], string>(
  "products/fetchProduct",
  async (path: string, { rejectWithValue }) => {
    try {
      return await getAll(path);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

export const deleteProduct = createAsyncThunk<string | number, string | number>(
  "products/deleteProduct",
  async (id: string | number, { rejectWithValue }) => {
    try {
      await removeProduct(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

export const editProduct = createAsyncThunk<
  IProduct,
  { id: string | number; dataBody: IProduct }
>("products/editProduct", async ({ id, dataBody },{rejectWithValue}) => {
  try {
    return await updateProduct({ id, dataBody });
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch products");
  }
});

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string | number, {rejectWithValue}) => {
    try {
      return await getProductById(id);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: IProduct,{rejectWithValue}) => {
    try {
      return await addProduct(data);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

// export const removeProduct = createAsyncThunk(
//   "products/removeProduct",
//   async ({ path, id }:Obj) => {
//     return await getAll(path);
//   }
// );
