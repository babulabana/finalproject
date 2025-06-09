// // import axios from 'axios'
// // import React, { useRef, useState } from 'react'
// // import { API_URL } from '../config/apidetails'

// // export default function Addteacher() {
// //     let nameref = useRef()
// //     let ageref =  useRef()
// //     let departmentref = useRef()
// //     let salaryref = useRef() 

// //     const add=()=>{
// //         let data = {
// //             name:nameref.current.value,
// //             age:ageref.current.value,
// //             department:departmentref.current.value,
// //             salary:salaryref.current.value
// //         }
// //         axios.post(API_URL+"teacher",data)
// //         .then((d)=>{
// //            alert(d.data.msg)
// //            nameref.current.value="",
// //            ageref.current.value="",
// //            departmentref.current.value="",
// //            salaryref.current.value=""
      
// //         })
// //         .catch((err)=>alert(err.msg))
// //     }
// //   return (
// //     <div>
// //     <div>Adduser

// //         <p>Enter Name : <input type="text" ref={nameref} className='border-1' /></p>
// //         <p>enter Age : <input type="number" ref={ageref}  className='border-1'/></p>
// //         <p>Enter Department : <input type="text" ref={departmentref} className='border-1' /></p>
// //         <p>enter Salary : <input type="number" ref={salaryref}  className='border-1'/></p>
        
// //         <input type="button" value="Add user" onClick={()=>add()} className='h-8 w-24 bg-blue-400 text-white' />
// //     </div>
// //     </div>
// //   )
// // }

// import axios from 'axios';
// import React, { useRef } from 'react';
// import { API_URL } from '../config/apidetails';

// export default function Addteacher() {
//   let nameref = useRef();
//   let ageref = useRef();
//   let departmentref = useRef();
//   let salaryref = useRef();

//   const add = () => {
//     let data = {
//       name: nameref.current.value,
//       age: ageref.current.value,
//       department: departmentref.current.value,
//       salary: salaryref.current.value
//     };
//     axios.post(API_URL + "teacher", data)
//       .then((d) => {
//         alert(d.data.msg);
//         nameref.current.value = "";
//         ageref.current.value = "";
//         departmentref.current.value = "";
//         salaryref.current.value = "";
//       })
//       .catch((err) => alert(err.msg));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Teacher</h2>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-600 mb-1">Name</label>
//             <input type="text" ref={nameref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           </div>
//           <div>
//             <label className="block text-gray-600 mb-1">Age</label>
//             <input type="number" ref={ageref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           </div>
//           <div>
//             <label className="block text-gray-600 mb-1">Department</label>
//             <input type="text" ref={departmentref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           </div>
//           <div>
//             <label className="block text-gray-600 mb-1">Salary</label>
//             <input type="number" ref={salaryref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           </div>

//           <button
//             onClick={add}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
//           >
//             Add Teacher
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Addteacher() {
  const nameref = useRef();
  const ageref = useRef();
  const departmentref = useRef();
  const salaryref = useRef();
  const btnref = useRef();
  const idref = useRef();
  const [teachers, setTeachers] = useState([]);

  // Fetch teacher data on load
  useEffect(() => {
    axios.get(API_URL + "teacher")
      .then(res => setTeachers(res.data.teachers))
      .catch(err => alert(err.message));
  }, []);

  // Add or update
  const add = () => {
    const data = {
      name: nameref.current.value,
      age: ageref.current.value,
      department: departmentref.current.value,
      salary: salaryref.current.value
    };

    if (btnref.current.value === "Add") {
      axios.post(API_URL + "teacher", data)
        .then(res => {
          alert(res.data.msg);
          setTeachers(res.data.teachers);
          clearFields();
        })
        .catch(err => alert(err.message));
    } else {
      data.id = idref.current.value;
      axios.put(API_URL + "teacher", data)
        .then(res => {
          alert(res.data.msg);
          setTeachers(res.data.teachers);
          clearFields();
        })
        .catch(err => alert(err.message));
    }
  };

  const clearFields = () => {
    nameref.current.value = "";
    ageref.current.value = "";
    departmentref.current.value = "";
    salaryref.current.value = "";
    idref.current.value = "";
    btnref.current.value = "Add";
  };

  const deleteTeacher = async (id) => {
    if (!window.confirm("Are you sure you want to delete this teacher?")) return;
    await axios.delete(API_URL + "teacher/" + id)
      .then(res => {
        alert(res.data.msg);
        setTeachers(res.data.teachers);
      })
      .catch(err => alert(err.message));
  };

  const editTeacher = (teacher) => {
    nameref.current.value = teacher.name;
    ageref.current.value = teacher.age;
    departmentref.current.value = teacher.department;
    salaryref.current.value = teacher.salary;
    idref.current.value = teacher._id;
    btnref.current.value = "Update";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Form */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add / Edit Teacher</h2>
        <input type="hidden" ref={idref} />

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              ref={nameref}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              ref={ageref}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Department</label>
            <input
              type="text"
              ref={departmentref}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Salary</label>
            <input
              type="number"
              ref={salaryref}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={add}
            ref={btnref}
            value="Add"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Add Teacher
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-gray-200 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Age</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Salary</th>
              <th className="px-4 py-3 text-left">Edit</th>
              <th className="px-4 py-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{teacher.name}</td>
                <td className="px-4 py-2">{teacher.age}</td>
                <td className="px-4 py-2">{teacher.department}</td>
                <td className="px-4 py-2">{teacher.salary}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => editTeacher(teacher)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteTeacher(teacher._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {teachers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
