import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { ProductProps, RequestStatus } from "../../interfaces";
import { ProductsItems } from "../../utils/data/Products";

interface InitialState {
  status: RequestStatus;
  productItems: ProductProps[];
  originalProductItems: ProductProps[];
}

const initialState: InitialState = {
  status: "nothing",
  productItems: [...ProductsItems],
  originalProductItems: [...ProductsItems],
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload;
    },
    searchProduct: (state, { payload }: PayloadAction<string>) => {
      state.productItems = state.originalProductItems;

      if (payload.trim() !== "") {
        state.productItems = state.productItems.filter(({ productName }) => {
          return productName.toLowerCase().includes(payload.toLowerCase());
        });
      }
    },
    addProduct: (state, { payload }: PayloadAction<ProductProps>) => {
      const newProduct: ProductProps = {
        ...payload,
        availability: "In stock",
      };
      state.originalProductItems.unshift(newProduct);
      state.productItems.unshift(newProduct);
    },
    deleteProduct: (state, { payload }: PayloadAction<string>) => {
      state.productItems = state.productItems.filter(
        (prod) => prod.id !== payload
      );
      state.originalProductItems = state.originalProductItems.filter(
        (prod) => prod.id !== payload
      );
    },
  },
});

export const { setStatus, searchProduct, addProduct, deleteProduct } =
  ProductSlice.actions;

export const searchProductFunc =
  (value: string): AppThunk =>
  (dispatch) => {
    dispatch(searchProduct(value));
  };

export const addProductFunc =
  (products: ProductProps): AppThunk =>
  (dispatch) => {
    console.log("products", products);
    dispatch(addProduct(products));
    dispatch(setStatus("data"));
  };

//Delete task
export const DeleteProductFunc =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(deleteProduct(id));
    dispatch(setStatus("data"));
  };
export default ProductSlice;
