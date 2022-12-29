import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WalletBalance {
  balance: any;
}

const initialState = {
  balance: {
    vault: "",
    wallet: "",
  },
};

const walletSlice: any = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    GET_WALLET_BALANCE: (wallet, action: PayloadAction<any>) => {
      return { ...wallet, balance: action.payload };
    },
  },
});

export const { GET_WALLET_BALANCE } = walletSlice.actions;

export default walletSlice.reducer;
