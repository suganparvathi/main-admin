import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface  CreateMemberDetailsProps{
    AddEmployeeName: string;
    AddEmployeeDesignation: string;
    AddPhoneNumber: string;
    AddCompanyName: string;
    AdditionalPhoneNumber: string;
    AddCompanyID: string;
    AddEmployeeCode: string;
    AddLoginID: string;
    EmployeeAddress: string;
    AddPassword: string;
  }
 export const defaultCreateMemberValue: CreateMemberDetailsProps = {
    AddEmployeeName: "",
    AddEmployeeDesignation: "",
    AddPhoneNumber: "",
    AddCompanyName: "",
    AdditionalPhoneNumber: "",
    AddCompanyID: "",
    AddEmployeeCode: "",
    AddLoginID: "",
    EmployeeAddress: "",
    AddPassword: "",
   
  }
  const initialState : CreateMemberDetailsProps = defaultCreateMemberValue;

const creatememberSlice = createSlice({
    name:"creatememberreducer",
    initialState,
    reducers:{
        UPDATE_CREATEMEMBER:(state: any, action: PayloadAction<object>) =>{
            return{...state, ...action.payload};
        },
    },
});

export const{ UPDATE_CREATEMEMBER} = creatememberSlice.actions;
export default creatememberSlice.reducer;
