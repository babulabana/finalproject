
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  islogin:false,
  value:0
}

export const Userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
     loginUser: (state) => {     
      state.islogin = true
    },
     logoutUser: (state) => {
      state.islogin = false
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { loginUser,logoutUser} = Userslice.actions

export default Userslice.reducer