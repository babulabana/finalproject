
// import React from 'react'
// import { useSelector } from 'react-redux'

// import { Link } from 'react-router'
// import Userlogin from './Userlogin'
// // import Userlogin from '../users/Userlogin'
// export default function Userhome() {
//     let data = useSelector((d)=>d.user.islogin)
//     let ui = <Link to="/addblog" >Add Blog</Link>
//   return (
//     // <div>{data?"welcome to homepage":< }</div>
//     <div>{data?ui:<Userlogin></Userlogin>}</div>
//   )
// }

import React from 'react'
import { useSelector } from 'react-redux'
import Allbolgs from "./Allblogs"
import Userlogin from "./Userlogin"

export default function Userhome() {
  let isulogin = useSelector((s)=>s.user.islogin)
  return (
    
    <div  className="min-h-screen  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
          <div>{isulogin? 
            <div className='flex items-center justify-center'>
              <div className="bg-white shadow-xl rounded-2xl 
              p-10 w-full max-w-md text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome user 🎉</h1>
                        <p className="text-gray-600 text-lg">You are successfully logged in.</p>
                    </div></div> 
                    :<Userlogin></Userlogin>}</div>
        </div>
  )
}
