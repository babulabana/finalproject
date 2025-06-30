// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Route ,Routes} from 'react-router'
// import { Link } from 'react-router'
// import { useSelector } from 'react-redux'
// import AddBlog from './components/users/AddBlog'
// import AdminNavbar from './components/admin/AdminNavbar'
// import Registration from './components/users/Registation'
// import Adminhome from './components/admin/Adminhome'
// import Userlogin from './components/users/Userlogin'
// import Adminlogin from './components/admin/Adminlogin'
// import Userhome from './components/users/Userhome'
// import Allblogs from './components/users/Allblogs'
// import Showdetails from './components/users/Showdetails'
// import UserNavbar from './components/users/UserNavbar'
// function App() {
// let islogin = useSelector((s)=>(s.admin.islogin))
// let isulogin = useSelector((S)=>S.user.islogin)
//   return (
//     <div>
//       <div className='flex gap-4 h-9 bg-orange-400'>
        
        
        
//         {isulogin?<Link to="/userhome">User home </Link>:<div><Link to="/userhome">User login</Link><Link to="/registration">User Registration </Link></div>}
      
//       {/* <Link to="/showusers">All users</Link>
//       <Link to="/adduser">Add User</Link> */}
//       <Link to="/adminhome">Admin</Link>
//       {/* <Link to="/userhome">user</Link> */}
//       </div>
//       {islogin? <AdminNavbar></AdminNavbar>:""}
//       <Routes>
//         <Route path ="/addblog" element={<AddBlog></AddBlog>}></Route>
//         <Route path = "/userhome" element={<Userhome></Userhome>}></Route>
//         <Route path='/adminhome' element={<Adminhome></Adminhome>}> </Route>
//          <Route path='/registration' element={<Registration></Registration>}></Route>
//          <Route path='/' element={<Registration></Registration>}></Route>


//           <Route path = "/userlogin" element = {<Userlogin></Userlogin>}></Route>
//         <Route path='/blogs' element={<Allblogs></Allblogs>}></Route>
//         <Route path='/adminlogin' element={<Adminlogin></Adminlogin>}></Route>
//         <Route path='/showdetails' element={<Showdetails></Showdetails>}></Route>
//          <Route path='/usernavabar' element={<UserNavbar></UserNavbar>}></Route>
//       </Routes>
    
//    </div>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import AddBlog from './components/users/AddBlog'
import AdminNavbar from './components/admin/AdminNavbar'
import Registration from './components/users/Registration'
import Adminhome from './components/admin/Adminhome'
import Userlogin from './components/users/Userlogin'
import Adminlogin from './components/admin/Adminlogin'
import Userhome from './components/users/Userhome'
import Allblogs from './components/users/Allblogs'
import Showdetails from './components/users/Showdetails'
import UserNavbar from './components/users/UserNavbar'

function App() {
  let islogin = useSelector((s) => (s.admin.islogin))
  let isulogin = useSelector((S) => S.user.islogin)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation */}
      {islogin?<AdminNavbar />:
      <nav className="bg-orange-500 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-3">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link to="/" className="text-white font-bold text-xl">Blog App</Link>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 w-full md:w-auto">
              {isulogin ? (
                <UserNavbar></UserNavbar>
              ) : (
                <>
                  <Link 
                    to="/userhome" 
                    className="text-white hover:bg-orange-600 px-3 py-1 rounded transition duration-200 text-center"
                  >
                    User Login
                  </Link>
                  <Link 
                    to="/registration" 
                    className="text-white hover:bg-orange-600 px-3 py-1 rounded transition duration-200 text-center"
                  >
                    User Registration
                  </Link>
                   <Link 
                to="/adminhome" 
                className="text-white hover:bg-orange-600 px-3 py-1 rounded transition duration-200 text-center"
              >
                Admin
              </Link>
                </>
              )}
              
             
            </div>
          </div>
        </div>
      </nav>

    
      }

      {/* Main Content */}
      <main className="  ">
        <Routes>
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/userhome" element={<Userhome />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Registration />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/blogs" element={<Allblogs />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/showdetails" element={<Showdetails />} />
          {/* <Route path="/usernavbar" element={<UserNavbar/>} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Blog Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App