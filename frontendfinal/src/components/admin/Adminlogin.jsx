import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAdmin } from '../../slices/Adminslice'

export default function Adminlogin() {
  let usernameref = useRef()
  let pwdref =useRef()
  let dispatch = useDispatch()
  const [msg,setmsg] = useState("")
  let chklogin=()=>{
    if(usernameref.current.value=="admin"&& pwdref.current.value=="123456")
    {
      dispatch(loginAdmin())
    }
    else{
      setmsg("invalid credentials")
    }
  }
  return (
    <div>
      <h1>Adminlogin</h1>
      <div><label htmlFor="">username</label><input type="text" ref={usernameref} name="" id="" /></div>
      <div><label htmlFor="">password</label><input type="password" ref={pwdref} name="" id="" /></div>
      <div><input type="button" value="login"  name="" id="" onClick={()=>chklogin()}/></div>
      {msg}
    </div>
  )
}
