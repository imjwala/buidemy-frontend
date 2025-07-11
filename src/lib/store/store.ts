import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice';
import instituteSlice from './institute/instituteSlice';
import teacherSlice from './auth/teacher/teacherSlice';


const store = configureStore({
  reducer: {
  auth: authSlice,
  institute: instituteSlice,
  teacher: teacherSlice
  }
})

export default store
export type AppDispatch =  typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>