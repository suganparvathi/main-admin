import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 export interface AddCuponDetailsProps{
    CuponType: string;
    Applicable: string;
    AddBannerImage: string;
    ValidFrom: string;
    ValidTo: string;
    Company: string;
   
   
  }
 export const defaultAddCuponValue:  AddCuponDetailsProps = {
    CuponType: "",
    Applicable: "",
    AddBannerImage: "",
    ValidFrom: "",
    ValidTo: "",
    Company: "",

}

const initialState :  AddCuponDetailsProps = defaultAddCuponValue;

const addcuponSlice = createSlice({
    name:"addcuponreducer",
    initialState,
    reducers:{
        UPDATE_ADDCUPON:(state: any, action: PayloadAction<object>) =>{
            return{...state, ...action.payload};
        },
    },
});

export const{UPDATE_ADDCUPON} = addcuponSlice.actions;
export default addcuponSlice.reducer;