import { IInitialState } from "./authSlice.type";
import { Status } from '../../types/type';
import { createSlice } from "@reduxjs/toolkit";

const initialState:IInitialState = {
  user: {
    username: "",
    password: ""
  },
  status: Status.LOADING
}

createSlice({
  name:"auth",
  initialState: initialState
})
