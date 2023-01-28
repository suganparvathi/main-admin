import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import walletReducer from "./wallet.reducer";
import adSlice from './CreateAds.reducer';
import addSlice from './AddNewBusCompany.reducer';
import AddCuponReducer from "./AddCupon.reducer";
import AddOfferReducer from "./AddOffer.reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
  ad:adSlice,
  addbus: addSlice, 
  addcupon: AddCuponReducer,
  addoffer: AddOfferReducer,
});
export default rootReducer;
