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
  },
});

export const { setStatus, searchProduct } = ProductSlice.actions;

export const searchProductFunc =
  (value: string): AppThunk =>
  (dispatch) => {
    dispatch(searchProduct(value));
  };

// //change the status
// export const ChangeStatusFunc =
//   (req: { id: string; isCompleted: boolean }): AppThunk =>
//   async (dispatch) => {
//     dispatch(setStatus("loading"));
//     dispatch(ChangeStatus(req));
//     dispatch(setStatus("data"));
//   };
// //Delete task
// export const DeleteTaskFunc =
//   (req: string): AppThunk =>
//   async (dispatch) => {
//     dispatch(setStatus("loading"));
//     dispatch(DeleteTask(req));
//     dispatch(setStatus("data"));
//   };
// //Delete task
// export const UpdateTaskFunc =
//   (task: TaskItems): AppThunk =>
//   async (dispatch) => {
//     dispatch(setStatus("loading"));
//     dispatch(UpdateTask(task));
//     dispatch(setStatus("data"));
//   };
export default ProductSlice;
