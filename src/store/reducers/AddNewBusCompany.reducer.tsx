import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface BusCompanyDetailsProps{
    CompanyName: string;
    CreateCompanyPassword: string;
    AddBusDocument: string;
    AddOwnerName: string;
    AddBusCompanyDocument: string;
    AddOwnerPhoneNumber: string;
    CreateCompanyLoginID: string;
    AddOwnerAddress: string;
    AddBusCompanyEmailID: string;
    AddBusCompanyAddress: string;
    AddOwnerPersonalID: string;
    AddOwnerIdProof: string;

  }

  export const defaultAddbusValue: BusCompanyDetailsProps = {
    CompanyName: "",
    CreateCompanyPassword: "",
    AddBusDocument: "",
    AddOwnerName: "",
    AddBusCompanyDocument: "",
    AddOwnerPhoneNumber: "",
    CreateCompanyLoginID: "",
    AddOwnerAddress: "",
    AddBusCompanyEmailID: "",
    AddBusCompanyAddress: "",
    AddOwnerPersonalID: "",
    AddOwnerIdProof: "",
}

const initialState : BusCompanyDetailsProps = defaultAddbusValue;

const addbusSlice = createSlice({
    name:"addbusreducer",
    initialState,
    reducers:{
        UPDATE_Addbus:(state, action: PayloadAction<object>) =>{
            return{...state, ...action.payload};
        },
    },
});

export const{UPDATE_Addbus} = addbusSlice.actions;
export default addbusSlice.reducer;