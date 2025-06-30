import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../slices/Userslice'
import { Link } from 'react-router'
export default function UserNavbar() {
    let dispatch = useDispatch()

  return (
    <div>
        <div className="bg-transparent shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* <div className="text-2xl font-bold text-indigo-600">
                    user Panel
                </div> */}
                <ul className="flex items-center space-x-6">
                     <li>
                        <Link to="/blogs" className="text-gray-700 font-medium hover:text-indigo-600 transition">
                            Blogs
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/addblog" className="text-gray-700 font-medium hover:text-indigo-600 transition">
                            Add Blog
                        </Link>
                    </li> */}
                      <li>
                        <Link to="/addblog" className="text-gray-700 font-medium hover:text-indigo-600 transition">
                            Add Blog
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => dispatch(logoutUser())}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
