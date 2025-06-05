import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Link } from 'react-router'
import Allusers from './components/Allusers'
import Allproducts from './components/Allproducts'
import Teachers from './components/Teachers'
import Allcity from './components/Allcity'
import Adduser from './components/Adduser'
import {Routes,Route, Link} from "react-router"
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='flex gap-20 border-2 bg-gray-400 text-white p-5'>
    <Link to="/adduser" className='border-2 border-black rounded-2xl px-5'>adduser</Link>
    <Link to="/alluser" className='border-2 border-black rounded-2xl px-5'>alluser</Link>
   </div>
    <Routes>
      <Route path='/alluser' element={<Allusers></Allusers>}></Route>
      <Route path='/adduser' element={<Adduser></Adduser>}></Route>
      <Route path='/' element={<Adduser></Adduser>}></Route>

      <Route path='/' element={<Allusers></Allusers>}></Route>
      {/* <Route path='/' element={<Allusers></Allusers>}></Route>
      <Route path='/' element={<Allusers></Allusers>}></Route> */}

    </Routes>


   {/* <div className='m-20 gap-20 flex flex-col'>
   <Allusers></Allusers>
   <Allproducts></Allproducts>
   <Teachers></Teachers>
   <Allcity></Allcity>
   <Adduser></Adduser>
   </div> */}
   
   </>
  )
}

export default App
