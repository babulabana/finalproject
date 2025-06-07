// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { API_URL } from '../config/apidetails'

// export default function Teachers() {
//     const [teacherUI,setteacherUI] = useState()

//     useEffect(()=>{

//       axios.get(API_URL + "teacher")
//       .then((d)=>{
//         let teach = (d.data.teachers).map((t)=>{
//             return <tr>
//                 <td className='border-1 p-2'>
//                      {t.name}
//                 </td>
//                  <td className='border-1 p-2'>
//                      {t.age}
//                 </td>
//                 <td className='border-1 p-2'>
//                      {t.department}
//                 </td>
//                  <td className='border-1 p-2'>
//                      {t.salary}
//                 </td>
//             </tr>
//         })
//         setteacherUI(teach)
//       }) 
//       .catch((err)=>console.log(err)) 
//     })
//   return (
//     <div>
//         <div>allteacher</div>
//       <table>
//         <thead>
//             <tr>
//                 <th className='border-1 p-2'>name</th>
//                 <th className='border-1 p-2'>age</th>
//                 <th className='border-1 p-2'>department</th>
//                 <th className='border-1 p-2'>salary</th>
//             </tr>
//         </thead>
//         <tbody>
//             {teacherUI}
//         </tbody>
//       </table>
//     </div>
//   )
// }
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Teachers() {
  const [teacherUI, setTeacherUI] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "teacher")
      .then((res) => {
        let teach = res.data.teachers.map((t) => (
          <tr key={t._id} className="border-t hover:bg-gray-50 transition duration-150">
            <td className="px-4 py-2">{t.name}</td>
            <td className="px-4 py-2">{t.age}</td>
            <td className="px-4 py-2">{t.department}</td>
            <td className="px-4 py-2">{t.salary}</td>
          </tr>
        ));
        setTeacherUI(teach);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">All Teachers</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Salary</th>
              </tr>
            </thead>
            <tbody>
              {teacherUI.length > 0 ? (
                teacherUI
              ) : (
                <tr>
                  <td colSpan="4" className="text-center px-4 py-4 text-gray-500">No teachers found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
