
// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import { API_URL } from '../config/apidetails';

// export default function Adduser() {
//   let nameref = useRef()
//   let ageref = useRef()
//   let btnref = useRef()
//   let idref = useRef()
//   const [users,setusers] = useState([])

//   useEffect(()=>{

//     axios.get(API_URL+"user")
//     .then((d)=>setusers(d.data.users))
    
//   },[])

//   const add = () => {
//     let data = {
//       name: nameref.current.value,
//       age: ageref.current.value
//     };
//     if(btnref.current.value =="Add")
//     {
//       axios.post(API_URL +"user", data)
//       .then((d) => {
//         alert(d.data.msg);
//         setusers(d.data.users)
      
//       })
//       .catch((err) => alert(err));
     
//     }
//     else{
//          data.id = idref.current.value
//          console.log(data)
//          axios.put(API_URL+"user",data)
//          .then((d)=>{
//           alert(d.data.msg)
//           setusers(d.data.users)
//          })
//          .catch((err)=>alert(err))

//     }
//      empty()
//   };
//   const empty =()=>{
//         nameref.current.value = "";
//         ageref.current.value = "";
//   }

//   const deleteuser = async(id)=>
//   {
//     let i = confirm("are you sure want to delete ?")
//     if(!i){
//       return
//     }
//     await axios.delete(API_URL+"user/"+id)
//     .then((d)=>{
//       alert(d.data.msg)
//       setusers(d.data.users)
//     })
//   }

//    const setedit = (user)=>
//     {
//       nameref.current.value = user.name;
//       ageref.current.value = user.age
//       btnref.current.value = "Update"
//       idref.current.value = user._id
//     }

//   return (
//     <div>
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add User</h2>

//         <div className="space-y-4">
//           <div><input type="text" ref={idref} disabled className='hidden' /></div>
//           <div>
//             <label className="block text-gray-600 mb-1">Enter Name</label>
//             <input
//               type="text"
//               ref={nameref}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 mb-1">Enter Age</label>
//             <input
//               type="number"
//               ref={ageref}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <input type='button' value="Add" ref={btnref}
//             onClick={()=>add()}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
//           />
          
//         </div>
//       </div>
//     </div>
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th className='border-1'>name</th>
//             <th className='border-1'>age</th>
//             <th className='border-1'>edit</th>
//             <th className='border-1'>delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user)=>{
//         return   <tr>
//           <td className='border-1'>{user.name}</td>
//           <td className='border-1'>{user.age}</td>
//           <td className='border-1'><input type="button" 
//           value ="edit" onClick={()=>setedit(user)}/></td>
//           <td className='border-1'><input type="button" 
//           value="delete" onClick={()=>deleteuser((user)._id)}/></td>
//           </tr>
//           })}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Adduser() {
  const nameref = useRef();
  const ageref = useRef();
  const btnref = useRef();
  const idref = useRef();
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "user")
      .then((res) => setusers(res.data.users));
  }, []);

  const add = () => {
    const data = {
      name: nameref.current.value,
      age: ageref.current.value,
    };

    if (btnref.current.value === "Add") {
      axios.post(API_URL + "user", data)
        .then((res) => {
          alert(res.data.msg);
          setusers(res.data.users);
        })
        .catch((err) => alert(err));
    } else {
      data.id = idref.current.value;
      axios.put(API_URL + "user", data)
        .then((res) => {
          alert(res.data.msg);
          setusers(res.data.users);
        })
        .catch((err) => alert(err));
    }

    empty();
  };

  const empty = () => {
    nameref.current.value = "";
    ageref.current.value = "";
    btnref.current.value = "Add";
  };

  const deleteuser = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    await axios.delete(API_URL + "user/" + id)
      .then((res) => {
        alert(res.data.msg);
        setusers(res.data.users);
      });
  };

  const setedit = (user) => {
    nameref.current.value = user.name;
    ageref.current.value = user.age;
    btnref.current.value = "Update";
    idref.current.value = user._id;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Form Section */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add / Edit User</h2>
        <input type="hidden" ref={idref} />

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              ref={nameref}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              ref={ageref}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="button"
            value="Add"
            ref={btnref}
            onClick={add}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-gray-200 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Age</th>
              <th className="px-4 py-3 text-left">Edit</th>
              <th className="px-4 py-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.age}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setedit(user)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteuser(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
