import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CreateAdsDetailsProps{
    AttachBanner: string;
    EnterAdName: string;
    AttachYourAdURL: string;
    EnterAdDisplayTime: string;
    indexKey?:number;
}

export const defaultAdValue : CreateAdsDetailsProps = {
    AttachBanner: "",
    EnterAdName: "",
    AttachYourAdURL: "",
    EnterAdDisplayTime: "",
   

}
const initialState: CreateAdsDetailsProps[] = [];

const adSlice = createSlice({
  name: "adreducer",
  initialState,
  reducers: {
    CREATE_AD: (state, action: PayloadAction<object>) => {
       state.push({...action.payload,indexKey:state.length+1} as CreateAdsDetailsProps);
       
    },
    UPDATE_AD: (state, action: PayloadAction<object>) => {
        state.pop();
        state.push({...action.  payload,indexKey:state.length+1} as CreateAdsDetailsProps);
        
      },
    },
});

export const { CREATE_AD, UPDATE_AD} = adSlice.actions;
export default adSlice.reducer;
