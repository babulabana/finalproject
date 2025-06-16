// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate} from "react-router"
// export default function AddBlog() {
//     let islogin = useSelector((s)=>s.admin.islogin)
//     let navigate = useNavigate()

//     useEffect(()=>{
//         console.log(islogin)
//         if(!islogin){
//             navigate("/adminhome")
//         }
//     },[islogin])
//   return (
//     <div>
//        <div>AddBlog : we will add blog form hereS</div>
//     </div>
//   )
// }

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router"

export default function AddBlog() {
    let islogin = useSelector((s) => s.admin.islogin)
    let navigate = useNavigate()

    useEffect(() => {
        if (!islogin) {
            navigate("/adminhome")
        }
    }, [islogin, navigate])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Blog</h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">Title</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter blog title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-700">Content</label>
                        <textarea
                            rows="6"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Write your blog content..."
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                        >
                            Submit Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
