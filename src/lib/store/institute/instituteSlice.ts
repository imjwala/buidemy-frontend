import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstitute, IInstituteInitialData } from "./instituteSlice.types";
import { Status } from "@/lib/types/type";
import { stat } from "fs";

const instituteState:IInstituteInitialData = {
  institute:{
    instituteAddress: "",
    instituteEmail: "",
    institutePhoneNumber: "",
    instituteName:""
  },
  status: Status.LOADING
}

const instituteSlice = createSlice({
  name:"institute",
  initialState: instituteState,
 reducers:{
  setInstitute(state:IInstituteInitialData,action:PayloadAction<IInstitute>){
    state.institute = action.payload
  },
  setStatus(state:IInstituteInitialData,action:PayloadAction<Status>){
    state.status = action.payload
  }
 }
})
const {setInstitute, setStatus}=instituteSlice.actions
export default instituteSlice.reducer