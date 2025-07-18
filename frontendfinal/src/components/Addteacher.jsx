// import axios from 'axios'
// import React, { useRef, useState } from 'react'
// import { API_URL } from '../config/apidetails'

// export default function Addteacher() {
//     let nameref = useRef()
//     let ageref =  useRef()
//     let departmentref = useRef()
//     let salaryref = useRef() 

//     const add=()=>{
//         let data = {
//             name:nameref.current.value,
//             age:ageref.current.value,
//             department:departmentref.current.value,
//             salary:salaryref.current.value
//         }
//         axios.post(API_URL+"teacher",data)
//         .then((d)=>{
//            alert(d.data.msg)
//            nameref.current.value="",
//            ageref.current.value="",
//            departmentref.current.value="",
//            salaryref.current.value=""
      
//         })
//         .catch((err)=>alert(err.msg))
//     }
//   return (
//     <div>
//     <div>Adduser

//         <p>Enter Name : <input type="text" ref={nameref} className='border-1' /></p>
//         <p>enter Age : <input type="number" ref={ageref}  className='border-1'/></p>
//         <p>Enter Department : <input type="text" ref={departmentref} className='border-1' /></p>
//         <p>enter Salary : <input type="number" ref={salaryref}  className='border-1'/></p>
        
//         <input type="button" value="Add user" onClick={()=>add()} className='h-8 w-24 bg-blue-400 text-white' />
//     </div>
//     </div>
//   )
// }

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Addteacher() {
  let nameref = useRef();
  let ageref = useRef();
  let departmentref = useRef();
  let salaryref = useRef();
  let idref = useRef();
  let btnref = useRef();
  const [teachers,setteachers] = useState([])
  
useEffect(()=>{
  axios.get(API_URL+"teacher")
  .then((res)=> setteachers(res.data.teachers))
},[])
  const add = () => {
    let data = {
      name: nameref.current.value,
      age: ageref.current.value,
      department: departmentref.current.value,
      salary: salaryref.current.value
    };

    if (btnref.current.value =="Add"){
        axios.post(API_URL + "teacher", data)
        .then((d) => {
        alert(d.data.msg);
       
      })
      .catch((err) => alert(err.msg));
    }
    else{
      data.id = idref.current.value;
      axios.put(API_URL+"teacher",data)
      .then((res)=>{
        alert(res.data.msg);
        setteachers(res.data.teachers)
      })
      .catch((err)=>alert(err))
    }
   empty();
  };
  const empty =()=>{
        nameref.current.value = "";
        ageref.current.value = "";
        departmentref.current.value = "";
        salaryref.current.value = "";
        btnref.current.value = "Add";
  }

  const deleteteacher = async(id)=>{
     let i = confirm("are you sure want to delete ?")
    if(!i){
      return
    }
    await axios.delete(API_URL+"teacher/"+id)
    .then((d)=>{
      alert(d.data.msg)
      setteachers(d.data.teachers)
    })
  }

    const setedit = (teacher)=>
    {
      nameref.current.value = teacher.name;
      ageref.current.value = teacher.age
      btnref.current.value = "Update"
      departmentref.current.value = teacher.department;
        salaryref.current.value = teacher.salary;
      idref.current.value = teacher._id
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Teacher</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input type="text" ref={nameref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Age</label>
            <input type="number" ref={ageref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Department</label>
            <input type="text" ref={departmentref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Salary</label>
            <input type="number" ref={salaryref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <input type='button' ref={btnref} value="Add"
            onClick={add}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          />
          
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>department</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher)=>{

              <tr>
                <td>{teacher.name}</td>
                <td>{teacher.age}</td>
                <td>{teacher.department}</td>
                <td>{teacher.salary}</td>
                <td><input type="button" value="Edit" onClick={()=>setedit(teacher)} /></td>
                <td><input type="button" value="Delete" onClick={()=>deleteteacher(teacher)._id} /></td>
              </tr>

            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

