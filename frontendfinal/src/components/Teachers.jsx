import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { API_URL } from '../config/apidetails'

export default function Teachers() {
    const [teacherUI,setteacherUI] = useState()

    useEffect(()=>{

      axios.get(API_URL + "teacher")
      .then((d)=>{
        let teach = (d.data.teachers).map((t)=>{
            return <tr>
                <td className='border-1 p-2'>
                     {t.name}
                </td>
                 <td className='border-1 p-2'>
                     {t.age}
                </td>
                <td className='border-1 p-2'>
                     {t.department}
                </td>
                 <td className='border-1 p-2'>
                     {t.salary}
                </td>
            </tr>
        })
        setteacherUI(teach)
      }) 
      .catch((err)=>console.log(err)) 
    })
  return (
    <div>
        <div>allteacher</div>
      <table>
        <thead>
            <tr>
                <th className='border-1 p-2'>name</th>
                <th className='border-1 p-2'>age</th>
                <th className='border-1 p-2'>department</th>
                <th className='border-1 p-2'>salary</th>
            </tr>
        </thead>
        <tbody>
            {teacherUI}
        </tbody>
      </table>
    </div>
  )
}
