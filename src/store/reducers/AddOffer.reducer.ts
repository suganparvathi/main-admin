import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddOfferDetailsProps{
    EnterOfferDetails: string;
    VaildFrom: string;
    EnterOfferType: string;
    ValidTo: string;
    AddBannerImage: string;
    
  }
  export const defaultAddOfferValue:  AddOfferDetailsProps = {
    EnterOfferDetails: "",
    VaildFrom: "",
    EnterOfferType: "",
    ValidTo: "",
    AddBannerImage: "",
  
}
const initialState : AddOfferDetailsProps = defaultAddOfferValue;

const addofferSlice = createSlice({
    name:"addofferreducer",
    initialState,
    reducers:{
        UPDATE_ADDOFFER:(state: any, action: PayloadAction<object>) =>{
            return{...state, ...action.payload};
        },
    },
});

export const{ UPDATE_ADDOFFER} = addofferSlice.actions;
export default addofferSlice.reducer;