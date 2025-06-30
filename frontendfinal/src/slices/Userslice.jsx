
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  islogin:false,
  user_id:""
}
export const Userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
     loginUser: (state,payload) => {

      state.islogin = true
      state.user_id = payload.payload
    },
     logoutUser: (state) => {
      state.islogin = false
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { loginUser,logoutUser} = Userslice.actions

export default Userslice.reducer