import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import walletReducer from "./wallet.reducer";
import adSlice from "./CreateAds.reducer";
import addSlice from "./AddNewBusCompany.reducer";
import AddCuponReducer from "./AddCupon.reducer";
import AddOfferReducer from "./AddOffer.reducer";
import CreateMemberReducer from "./CreateMember.reducer";
import storeName from "./storeName";

const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
  ad: adSlice,
  addbus: addSlice,
  addcupon: AddCuponReducer,
  addoffer: AddOfferReducer,
  createmember: CreateMemberReducer,
  storeName: storeName,
});
export default rootReducer;
