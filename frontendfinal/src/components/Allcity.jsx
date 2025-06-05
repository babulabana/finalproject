import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../config/apidetails'

export default function Allcity() {
    const [cityUI,setcityUI] = useState()
    useEffect(()=>{
        axios.get(API_URL+"city")
        .then((d)=>{
            let city = (d.data.city).map((c)=>{
               return <tr>
                    <td className='border-1 p-2'>{c.name}</td>
                    <td className='border-1 p-2'>{c.state}</td>
                    <td className='border-1 p-2'>{c.country}</td>
                    <td className='border-1 p-2'>{c.population}</td>
                    <td className='border-1 p-2'>{c.area}</td>
                    <td className='border-1 p-2'>{c.official_language}</td>
                    <td className='border-1 p-2'>{c.metro}</td>
                </tr>
            })
            setcityUI(city)
        }) 
    },[])
  return (
    <div className='m-20'>
        <h1>Allcity</h1>
      <table>
        <thead>
            <tr>
                <th className='border-1 p-2'>
                 name
                </th>
                <th className='border-1 p-2'>
                   state 
                </th>
                <th className='border-1 p-2'>
                   country 
                </th>
                <th className='border-1 p-2'>
                    population
                </th>
                <th className='border-1 p-2'>
                    area
                </th>
                <th className='border-1 p-2'>
                    official_language
                </th>
                <th className='border-1 p-2'>
                    metro
                </th>
            </tr>
        </thead>
        <tbody>
            {cityUI}
        </tbody>
      </table>
    </div>
  )
}
