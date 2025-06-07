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
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>
//    <div className='flex gap-20 border-2 bg-gray-400 text-white p-5'>
//     <Link to="/adduser" className='border-2 border-black rounded-2xl px-5'>adduser</Link>
//     <Link to="/alluser" className='border-2 border-black rounded-2xl px-5'>alluser</Link>
//     <Link to="/teacher" className='border-2 border-black rounded-2xl px-5'>teacher</Link>
//     <Link to="/addteacher" className='border-2 border-black rounded-2xl px-5'>addteacher</Link>
//     <Link to="/allproduct" className='border-2 border-black rounded-2xl px-5'>allproduct</Link>
//     <Link to="/allcity" className='border-2 border-black rounded-2xl px-5'>allcity</Link>
//     <Link to="/addproduct" className='border-2 border-black rounded-2xl px-5'>addproduct</Link>
//     <Link to="/addcity" className='border-2 border-black rounded-2xl px-5'>addcity</Link>

//    </div>
//     <Routes>
//       <Route path='/alluser' element={<Allusers></Allusers>}></Route>
//       <Route path='/adduser' element={<Adduser></Adduser>}></Route>
//       <Route path='/addteacher' element={<Addteacher></Addteacher>}></Route>

//       <Route path='/teacher' element={<Teachers></Teachers>}></Route>
//       <Route path='/allproduct' element={<Allproducts></Allproducts>}></Route>
//       <Route path='/allcity' element={<Allcity></Allcity>}></Route>
//       <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
//       <Route path='/addcity' element={<Addcity></Addcity>}></Route>

//     </Routes>

// {/* 
//    <div className='m-20 gap-20 flex flex-col'>
//    <Allusers></Allusers>
//    <Allproducts></Allproducts>
//    <Teachers></Teachers>
//    <Allcity></Allcity>
//    <Adduser></Adduser>
//    </div> */}
   
//    </>
//   )
// }

// export default App
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Corrected import to react-router-dom
import Allusers from "./components/Allusers";
import Allproducts from "./components/Allproducts";
import Teachers from "./components/Teachers";
import Allcity from "./components/Allcity";
import Adduser from "./components/Adduser";
import Addteacher from "./components/Addteacher";
import Addproduct from "./components/Addproduct";
import Addcity from "./components/Addcity";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-gray-700 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">My Dashboard</div>

          {/* Hamburger button - shows on small screens */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 0 0-1.414-1.414L12 9.172 7.05 4.222A1 1 0 1 0 5.636 5.636L10.586 10.586 5.636 15.536a1 1 0 1 0 1.414 1.414L12 12.828l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 10.586l4.95-4.95z"
                />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Links for medium screens and up */}
          <div className="hidden md:flex md:gap-6">
            <NavLink to="/adduser" label="Add User" />
              <NavLink to="/addteacher" label="Add Teacher" />
              <NavLink to="/addproduct" label="Add Product" />
            <NavLink to="/addcity" label="Add City" />    
            <NavLink to="/alluser" label="All Users" />
            <NavLink to="/teacher" label="Teachers" />
                  
            <NavLink to="/allproduct" label="All Products" />
            <NavLink to="/allcity" label="All Cities" />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3 flex flex-col px-2">
            <NavLinkMobile to="/adduser" label="Add User" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/alluser" label="All Users" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/teacher" label="Teachers" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/addteacher" label="Add Teacher" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/allproduct" label="All Products" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/allcity" label="All Cities" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/addproduct" label="Add Product" onClick={() => setMenuOpen(false)} />
            <NavLinkMobile to="/addcity" label="Add City" onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </nav>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen rounded-md shadow-md mt-6">
        <Routes>
          <Route path="/alluser" element={<Allusers />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/addteacher" element={<Addteacher />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/allproduct" element={<Allproducts />} />
          <Route path="/allcity" element={<Allcity />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/addcity" element={<Addcity />} />
        </Routes>
      </main>
    </>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 rounded-lg border border-transparent hover:bg-gray-600 transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

function NavLinkMobile({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-200 text-center"
    >
      {label}
    </Link>
  );
}

export default App;
