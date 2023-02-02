import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

const storeName = createSlice({
  name: "storeName",
  initialState,
  reducers: {
    STORE_NAME: (storeName, action: PayloadAction<object>) => {
      return { name: action.payload };
    },
  },
});

export const { STORE_NAME } = storeName.actions;

export default storeName.reducer;
