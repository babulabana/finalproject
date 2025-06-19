import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Allusers from './components/Allusers'
// import Adduser from './components/Adduser'
import { Route ,Routes} from 'react-router'
import { Link } from 'react-router'
// import Adminhome from './components/admin/Adminhome'
// import AdminLogin from './components/admin/AdminLogin'
import { useSelector } from 'react-redux'
import AddBlog from './components/users/Addblog'
// import Userhome from './components/users/Userhome'
// import AddBlog from './components/user/AddBlog'
import AdminNavbar from './components/admin/AdminNavbar'
// import UserRegistration from './components/user/UserRegistration'
// import UserLogin from './components/user/userLogin'
// import UserHome from './components/user/UserHome'
import Registration from './components/users/Registation'
import Adminhome from './components/admin/Adminhome'
import Userlogin from './components/users/Userlogin'
import Adminlogin from './components/admin/Adminlogin'
import Userhome from './components/users/Userhome'
import ShowBlog from './components/users/ShowBlog'
function App() {
let islogin = useSelector((s)=>(s.admin.islogin))
let userislogin = useSelector((S)=>S.user.islogin)
  return (
    <div>
      {/* Current counter is : {data} */}
      <div className='flex gap-4 h-9 bg-orange-400'>
        
        
        
        {userislogin?<Link to="/userHome">User home </Link>:<div><Link to="/userlogin">User login</Link><Link to="/registration">User Registration </Link></div>}
      
      <Link to="/showusers">All users</Link>
      <Link to="/adduser">Add User</Link>
      <Link to="/adminHome">Admin</Link>
      <Link to="/showblog">showblog</Link>
      </div>
      {islogin? <AdminNavbar></AdminNavbar>:""}
      <Routes>
        <Route path ="/addblog" element={<AddBlog></AddBlog>}></Route>
        <Route path = "/userHome" element={<Userhome></Userhome>}></Route>
        <Route path='/adminHome' element={<Adminhome></Adminhome>}> </Route>
          {/* <Route path="/registration" element={}></Route> */}
         <Route path='/registration' element={<Registration></Registration>}></Route>

          <Route path = "/userlogin" element = {<Userlogin></Userlogin>}></Route>
          {/* <Route path='/addblog' element={<AddBlog></AddBlog>}></Route> */}
        <Route path='/showblog' element={<ShowBlog></ShowBlog>}></Route>
        <Route path='/adminLogin' element={<Adminlogin></Adminlogin>}></Route>
        {/* <Route path='/adduser' element={<Adduser></Adduser>}></Route>
        <Route path='/showusers' element={<Allusers></Allusers>}></Route> */}
      </Routes>
    
   </div>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import { Link } from 'react-router'
// import Allusers from './components/Allusers'
// import Allproducts from './components/Allproducts'
// import Teachers from './components/Teachers'
// import Allcity from './components/Allcity'
// import Adduser from './components/Adduser'
// import {Routes,Route, Link} from "react-router"
// import Addteacher from './components/Addteacher'
// import Addproduct from './components/Addproduct'
// import Addcity from './components/Addcity'
// import Adminlogin from './components/admin/Adminlogin'
// import AddBlog from './components/admin/AddBlog'
// //  import useSelector from "react-redux"
// import AdminNavbar from './components/admin/AdminNavbar'
// import Adminhome from './components/admin/Adminhome'
// import { useSelector } from 'react-redux'
// import Registration from './components/users/Registation'
// import Userlogin from './components/users/Userlogin'
// import Userhome from './components/users/Userhome'
// function App() {
//   // const [count, setCount] = useState(0)

//   let islogin =useSelector((s)=>(s.admin.islogin))
//   let userislogin = useSelector((s)=>(s.user.islogin))
//   return (
//    <>
//    {userislogin?<Link to="/userhome">user home</Link>:<Link to="/userlogin">userlogin</Link>}
//    <div className='flex gap-20 border-2 bg-gray-400 text-white p-5'>
//     {/* <Link to="/adduser" className='border-2 border-black rounded-2xl px-5'>adduser</Link>
//     <Link to="/alluser" className='border-2 border-black rounded-2xl px-5'>alluser</Link>
//     <Link to="/teacher" className='border-2 border-black rounded-2xl px-5'>teacher</Link>
//     <Link to="/addteacher" className='border-2 border-black rounded-2xl px-5'>addteacher</Link>
//     <Link to="/allproduct" className='border-2 border-black rounded-2xl px-5'>allproduct</Link>
//     <Link to="/allcity" className='border-2 border-black rounded-2xl px-5'>allcity</Link>
//     <Link to="/addproduct" className='border-2 border-black rounded-2xl px-5'>addproduct</Link>
//     <Link to="/addcity" className='border-2 border-black rounded-2xl px-5'>addcity</Link> */}
//     <Link to="/adminhome">Admin</Link>
//     <Link to="/userlogin">userlogin</Link>
//     <Link to="/registration">registation</Link>
//    </div>
//    <div>{islogin? <AdminNavbar></AdminNavbar>:""}</div>
//     <Routes>
//       <Route path='/alluser' element={<Allusers></Allusers>}></Route>
//       <Route path='/adduser' element={<Adduser></Adduser>}></Route>
//       <Route path='/addteacher' element={<Addteacher></Addteacher>}></Route>

//       <Route path='/teacher' element={<Teachers></Teachers>}></Route>
//       <Route path='/allproduct' element={<Allproducts></Allproducts>}></Route>
//       <Route path='/allcity' element={<Allcity></Allcity>}></Route>
//       <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
//       <Route path='/addcity' element={<Addcity></Addcity>}></Route>
//       <Route path='/adminlogin' element={<Adminlogin></Adminlogin>}></Route>
//       <Route path='/addblog' element={<AddBlog></AddBlog>}></Route>
//       <Route path='/adminhome' element={<Adminhome></Adminhome>}></Route>
//       <Route path='/registration' element={<Registration></Registration>}></Route>
//       {/* <Route path='/userlogin' element={<Userlogin></Userlogin>}></Route> */}
//       <Route path='/userlogin' element={<Userlogin></Userlogin>}></Route>
//       <Route path='/userhome' element={<Userhome></Userhome>}></Route>



      
//     </Routes>


   
//    </>
//   )
// }

// export default App

// // import { useState } from "react";
// // import { Routes, Route, Link } from "react-router-dom"; // Corrected import to react-router-dom
// // import Allusers from "./components/Allusers";
// // import Allproducts from "./components/Allproducts";
// // import Teachers from "./components/Teachers";
// // import Allcity from "./components/Allcity";
// // import Adduser from "./components/Adduser";
// // import Addteacher from "./components/Addteacher";
// // import Addproduct from "./components/Addproduct";
// // import Addcity from "./components/Addcity";
// // import Registration from "./components/users/Registation";
// // // import Adminhome from "./admin/Adminhome";
// // // import AdminLogin from "./admin/Adminlogin";

// // function App() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <>
// //       {/* Navigation */}
// //       <nav className="bg-gray-700 text-white p-4 shadow-md">
// //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// //           <div className="text-2xl font-bold">My Dashboard</div>

// //           {/* Hamburger button - shows on small screens */}
// //           <button
// //             className="md:hidden focus:outline-none"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             aria-label="Toggle Menu"
// //           >
// //             <svg
// //               className="w-6 h-6 fill-current"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               {menuOpen ? (
// //                 <path
// //                   fillRule="evenodd"
// //                   clipRule="evenodd"
// //                   d="M18.364 5.636a1 1 0 0 0-1.414-1.414L12 9.172 7.05 4.222A1 1 0 1 0 5.636 5.636L10.586 10.586 5.636 15.536a1 1 0 1 0 1.414 1.414L12 12.828l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 10.586l4.95-4.95z"
// //                 />
// //               ) : (
// //                 <path d="M4 6h16M4 12h16M4 18h16" />
// //               )}
// //             </svg>
// //           </button>

// //           {/* Links for medium screens and up */}
// //           <div className="hidden md:flex md:gap-6">
// //             <NavLink to="/adduser" label="Add User" />
// //               <NavLink to="/addteacher" label="Add Teacher" />
// //               <NavLink to="/addproduct" label="Add Product" />
// //             <NavLink to="/addcity" label="Add City" />    
// //             <NavLink to="/alluser" label="All Users" />
// //             <NavLink to="/teacher" label="Teachers" />
                  
// //             <NavLink to="/allproduct" label="All Products" />
// //             <NavLink to="/allcity" label="All Cities" />
// //             <NavLink to="/registation" label="registation" />
// //              {/* <NavLink to="/adminlogin" label="adminlogin" />
// //               <NavLink to="/adminhome" label="adminhome" /> */}
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {menuOpen && (
// //           <div className="md:hidden mt-4 space-y-3 flex flex-col px-2">
// //             <NavLinkMobile to="/adduser" label="Add User" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/alluser" label="All Users" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/teacher" label="Teachers" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/addteacher" label="Add Teacher" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/allproduct" label="All Products" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/allcity" label="All Cities" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/addproduct" label="Add Product" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/addcity" label="Add City" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/registation" label="registation" onClick={() => setMenuOpen(false)} />

// //             {/* <NavLinkMobile to="/adminhome" label="admin home" onClick={() => setMenuOpen(false)} />
// //             <NavLinkMobile to="/adminlogin" label="admin login" onClick={() => setMenuOpen(false)} /> */}

// //           </div>
// //         )}
// //       </nav>

// //       {/* Main content area */}
// //       <main className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen rounded-md shadow-md mt-6">
// //         <Routes>
// //           <Route path="/alluser" element={<Allusers />} />
// //           <Route path="/adduser" element={<Adduser />} />
// //           <Route path="/addteacher" element={<Addteacher />} />
// //           <Route path="/teacher" element={<Teachers />} />
// //           <Route path="/allproduct" element={<Allproducts />} />
// //           <Route path="/allcity" element={<Allcity />} />
// //           <Route path="/addproduct" element={<Addproduct />} />
// //           <Route path="/addcity" element={<Addcity />} />
// //           <Route path="/registation" element={<Registration></Registration>}/>
// //           {/* <Route path="/adminhome" element={<Adminhome></Adminhome>}></Route>
// //           <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route> */}

// //         </Routes>
// //       </main>
// //     </>
// //   );
// // }

// // function NavLink({ to, label }) {
// //   return (
// //     <Link
// //       to={to}
// //       className="px-4 py-2 rounded-lg border border-transparent hover:bg-gray-600 transition-colors duration-200"
// //     >
// //       {label}
// //     </Link>
// //   );
// // }

// // function NavLinkMobile({ to, label, onClick }) {
// //   return (
// //     <Link
// //       to={to}
// //       onClick={onClick}
// //       className="block px-4 py-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-200 text-center"
// //     >
// //       {label}
// //     </Link>
// //   );
// // }

// // export default App;


