// import axios from 'axios'
// import React, { useRef, useState } from 'react'
// import { API_URL } from '../config/apidetails'

// export default function Adduser() {
//     let nameref = useRef()
//     let ageref = useRef()
//     // const [useradd,setuseradd] = useState()
//     const add=()=>{
//         let data = {
//           name:nameref.current.value,
//           age:ageref.current.value
//         }
//         axios.post(API_URL+"user",data)
//         .then((d)=>{
//           alert(d.data.msg)
//            nameref.current.value="",
//            ageref.current.value=""
//         })
        
//         .catch((err)=>alert(err))
//     }

//   return (
//     <div>
//        <div>Adduser

//         <p>Enter Name : <input type="text" ref={nameref} className='border-1' /></p>
//         <p>enter Age : <input type="number" ref={ageref}  className='border-1'/></p>
//         <input type="button" value="Add user" onClick={()=>add()} className='h-8 w-24 bg-blue-400 text-white' />
//     </div>
//     </div>
//   )
// }


import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Adduser() {
  let nameref = useRef();
  let ageref = useRef();

  const [users,setusers] = useState([])

  useEffect(()=>{

    axios.get(API_URL+"user")
    .then((d)=>setusers(d.data.users))
    
  },[])

  const add = () => {
    let data = {
      name: nameref.current.value,
      age: ageref.current.value
    };
    axios.post(API_URL + "user", data)
      .then((d) => {
        alert(d.data.msg);
        setusers(d.data.users)
      
      })
      .catch((err) => alert(err));
      empty()
  };
  const empty =()=>{
        nameref.current.value = "";
        ageref.current.value = "";
  }

  const deleteuser = async(id)=>
  {
    let i = confirm("are you sure want to delete ?")
    if(!i){
      return
    }
    await axios.delete(API_URL+"user"+id)
    .then((d)=>{
      alert(d.data.msg)
      setusers(d.data.users)
    })
  }

  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add User</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Enter Name</label>
            <input
              type="text"
              ref={nameref}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Enter Age</label>
            <input
              type="number"
              ref={ageref}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={add}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th className='border-1'>name</th>
            <th className='border-1'>age</th>
            <th className='border-1'>edit</th>
            <th className='border-1'>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>{
        return   <tr>
          <td className='border-1'>{user.name}</td>
          <td className='border-1'>{user.age}</td>
          <td className='border-1'><input type="button" 
          value = "edit"/></td>
          <td className='border-1'><input type="button" 
          value="delete" onClick={()=>deleteuser((user)._id)}/></td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}
