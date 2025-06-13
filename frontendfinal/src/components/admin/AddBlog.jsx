import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
//  import useNavigate from "react-router"
import useNavigate from"react-router"
export default function AddBlog() {
    let islogin = useSelector((s)=>s.admin.islogin)
    // let navigate = useNavigate()
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(islogin)
        if(!islogin){
          navigate("/adminhome")
        }
    },[islogin])
  return (
    <div>
      <div>AddBlog : we will add blog form hereS</div>
    </div>
  )
}
