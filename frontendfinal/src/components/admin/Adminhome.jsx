import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../slices/Adminslice'
export default function Adminhome() {
    let islogin = useSelector((s)=>s.admin.islogin)
    // let dispatch = useDispatch()
     let ui =<h1>this is admin home after login </h1>
    console.log(data)
  return (
    <>
       <div> {islogin?"":<AdminLogin></AdminLogin>}</div>
    {/* <input type="button" value="+" onClick={()=>dispatch(increment())} /><div> count {data}</div>
    <input type="button" value="-" onClick={()=>dispatch(decrement())} /> */}
    </>
  )
}