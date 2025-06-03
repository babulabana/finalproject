import axios from 'axios'
import React from 'react'
import { API_URL } from '../config/apidetails'
import { useEffect } from 'react'
import { useState } from 'react'
// import { API_URL } from '../config/apidetails'

export default function Allproducts() {
    const [productUI,setproductUI] = useState()
    const [product, setproduct] = useState([])

    useEffect(()=>{
        axios.get(API_URL + "product")
        .then((d)=>{
            // setproduct(d.data.products)
            let prot =(d.data.products).map((p)=>{
              return  <tr  key={p._id}>
                    <td className='border-1 p-2'>
                        {p.name}
                    </td>
                    <td className='border-1 p-2'>
                        {p.price}
                    </td>
                    <td className='border-1 p-2'>
                        {p.title}
                    </td>
                    <td className='border-1 p-2'>
                        {p.category}
                    </td>
                    <td className='border-1 p-2'>
                        {p.company}
                    </td>
                </tr>
            })
            setproductUI(prot)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    
      <div className=''>
      <h1>Allproducts</h1>
      <table>
        <thead>
          <tr>
             <th className='border-1 p-2'>name</th>
             <th className='border-1 p-2'>price</th>
             <th className='border-1 p-2'>title</th>
             <th className='border-1 p-2'>category</th>
             <th className='border-1 p-2'>company</th>
          </tr>
        </thead>
        <tbody>
          {productUI}
        </tbody>
      </table>
    </div>
    
  )
}
