// import React, { useRef, useState } from 'react'

// import { loginAdmin } from '../../slices/Adminslice'
// import { useDispatch } from 'react-redux'

// export default function Adminlogin() {
//     let usernameref = useRef()
//     let pwdref = useRef()
//     let dispatch = useDispatch()

//     const [msg,setmsg] = useState("")
//     let chklogin =()=>{
//         if(usernameref.current.value=="admin" && pwdref.current.value=="123456")
//         {
//           dispatch( loginAdmin())
//         }
//           else
//             {
//             setmsg("Invalid credentials")
//             }
//     }
//   return (
//     <div>
//         Adminlogin
//       <div>
//         <label htmlFor="">Username</label>
//         <input type="text" ref={usernameref}  />
//       </div>
//       <div>
//         <label htmlFor="">password</label>
//         <input type="password" ref={pwdref}  />
//       </div>
//       <div className='flex flex-col'>
//         <input type="button" value="Login"  onClick={()=>chklogin()} />
//         {msg}
//       </div>
//     </div>
//   )
// }
import React, { useRef, useState } from 'react'
import { loginAdmin } from '../../slices/Adminslice'
import { useDispatch } from 'react-redux'

export default function Adminlogin() {
    let usernameref = useRef()
    let pwdref = useRef()
    let dispatch = useDispatch()

    const [msg, setmsg] = useState("")

    let chklogin = () => {
        if (usernameref.current.value === "admin" && pwdref.current.value === "123456") {
            dispatch(loginAdmin())
        } else {
            setmsg("Invalid credentials")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Username</label>
                    <input
                        type="text"
                        ref={usernameref}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter username"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Password</label>
                    <input
                        type="password"
                        ref={pwdref}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-4">
                    <button
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                        onClick={chklogin}
                    >
                        Login
                    </button>
                </div>
                {msg && (
                    <div className="text-red-500 text-center font-medium">
                        {msg}
                    </div>
                )}
            </div>
        </div>
    )
}
