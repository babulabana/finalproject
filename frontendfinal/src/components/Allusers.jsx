// import React, { useEffect, useState } from 'react'
// import { API_URL } from '../config/apidetails'
// import axios from "axios"
// export default function Allusers() {
//     const [usersUI,setusersUI] = useState()
//     const [users,setusers] = useState([])
//     useEffect(()=>{
//         // fetch(API_URL+"user")
//         // .then((d)=>d.json())
//         // .then((d)=>{
//         //     console.log(d.data)
//         //     let users= d.data

//         //     let ui =users.map((u)=>{
//         //         return <tr><td className='border-1 p-2'>{u.name}</td>
//         //         <td className='border-1 p-2'>{u.age}</td></tr>

//         //     })
//         //     setusersUI(ui)
//         // })
//         // .catch((err)=>console.log(err))

//        axios.get(API_URL + "user")
//        .then((d)=>
//       {
//         let uitemp = (d.data.users).map((u)=> 
//          <tr key={u._id}><td className='border-1 p-2'>{u.name}</td>
//           <td className='border-1 p-2'>{u.age}</td></tr>)
//         setusersUI(uitemp)
//       })
//        .catch((err)=>console.log(err))
//     },[])

//   return (
//     <div className=''>
//       <h1>Allusers</h1>
//       <table>
//         <thead>
//           <tr>
//             <th className='border-1 p-2'>name</th>
//              <th className='border-1 p-2'>age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usersUI}
//         </tbody>
//       </table>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/apidetails';
import axios from "axios";

export default function Allusers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "user")
      .then((res) => {
        setUsers(res.data.users || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-6 md:p-10 transition-all">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">All Users</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u) => (
                  <tr key={u._id} className="border-t hover:bg-gray-100 transition duration-150">
                    <td className="px-6 py-3">{u.name}</td>
                    <td className="px-6 py-3">{u.age}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-4 text-center text-gray-500">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
