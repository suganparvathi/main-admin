import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import walletReducer from "./wallet.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});
export default rootReducer;
