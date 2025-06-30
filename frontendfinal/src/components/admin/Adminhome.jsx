import React from 'react'
import { useSelector } from 'react-redux'
import Adminlogin from './Adminlogin'

export default function Adminhome() {
    let islogin = useSelector((s)=>s.admin.islogin)
    //  let ui =<h1>this is admin home after login </h1>
  return (
    <div  className="min-h-screen  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className=''>{islogin? <div className='flex items-center justify-center'><div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Admin 🎉</h1>
                    <p className="text-gray-600 text-lg">You are successfully logged in.</p>
                </div></div> 
                :<Adminlogin></Adminlogin>}</div>
    </div>
  )
}
