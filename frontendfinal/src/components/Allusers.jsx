import React, { useEffect, useState } from 'react'
import { API_URL } from '../config/apidetails'
export default function Allusers() {
    const [usersUI,setusersUI] = useState()

    useEffect(()=>{
        fetch(API_URL+"user")
        .then((d)=>d.json())
        .then((d)=>{
            console.log(d.data)
            let users= d.data

            let ui =users.map((u)=>{
                return <tr><td className='border-1 p-2'>{u.name}</td>
                <td className='border-1 p-2'>{u.age}</td></tr>

            })
            setusersUI(ui)
        })
        .catch((err)=>console.log(err))
    },[])

  return (
    <div className=''>
      <h1>Allusers</h1>
      <table>
        <thead>
          <tr><th className='border-1 p-2'>name</th> <th className='border-1 p-2'>age</th></tr>
        </thead>
        <tbody>
          {usersUI}
        </tbody>
      </table>
    </div>
  )
}
