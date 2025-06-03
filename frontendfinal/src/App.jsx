import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allusers from './components/Allusers'
import Allproducts from './components/Allproducts'
import Teachers from './components/Teachers'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Allusers></Allusers>
   <Allproducts></Allproducts>
   <Teachers></Teachers>
   </>
  )
}

export default App
