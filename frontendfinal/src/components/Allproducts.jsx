// import axios from 'axios'
// import React from 'react'
// import { API_URL } from '../config/apidetails'
// import { useEffect } from 'react'
// import { useState } from 'react'
// // import { API_URL } from '../config/apidetails'

// export default function Allproducts() {
//     const [productUI,setproductUI] = useState()
//     const [product, setproduct] = useState([])

//     useEffect(()=>{
//         axios.get(API_URL + "product")
//         .then((d)=>{
//             // setproduct(d.data.products)
//             let prot =(d.data.products).map((p)=>{
//               return  <tr  key={p._id}>
//                     <td className='border-1 p-2'>
//                         {p.name}
//                     </td>
//                     <td className='border-1 p-2'>
//                         {p.price}
//                     </td>
//                     <td className='border-1 p-2'>
//                         {p.title}
//                     </td>
//                     <td className='border-1 p-2'>
//                         {p.category}
//                     </td>
//                     <td className='border-1 p-2'>
//                         {p.company}
//                     </td>
//                 </tr>
//             })
//             setproductUI(prot)
//         })
//         .catch((err)=>console.log(err))
//     },[])
//   return (
    
//       <div className=''>
//       <h1>Allproducts</h1>
//       <table>
//         <thead>
//           <tr>
//              <th className='border-1 p-2'>name</th>
//              <th className='border-1 p-2'>price</th>
//              <th className='border-1 p-2'>title</th>
//              <th className='border-1 p-2'>category</th>
//              <th className='border-1 p-2'>company</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productUI}
//         </tbody>
//       </table>
//     </div>
    
//   )
// }
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Allproducts() {
  const [productUI, setProductUI] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "product")
      .then((res) => {
        let prot = res.data.products.map((p) => (
          <tr key={p._id} className="border-t hover:bg-gray-50 transition duration-150">
            <td className="px-4 py-2">{p.name}</td>
            <td className="px-4 py-2">{p.price}</td>
            <td className="px-4 py-2">{p.title}</td>
            <td className="px-4 py-2">{p.category}</td>
            <td className="px-4 py-2">{p.company}</td>
          </tr>
        ));
        setProductUI(prot);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">All Products</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {productUI.length > 0 ? (
                productUI
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-4 text-center text-gray-500">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
