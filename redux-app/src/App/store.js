import { configureStore } from '@reduxjs/toolkit'
import LoginFormSlice from '../Redux-toolkit/Reducers/LoginFormSlice'


export const store = configureStore({
  reducer: {
    LoginFormSlice
  },
})