// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { API_URL } from '../config/apidetails'

// export default function Allcity() {
//     const [cityUI,setcityUI] = useState()
//     useEffect(()=>{
//         axios.get(API_URL+"city")
//         .then((d)=>{
//             let city = (d.data.city).map((c)=>{
//                return <tr>
//                     <td className='border-1 p-2'>{c.name}</td>
//                     <td className='border-1 p-2'>{c.state}</td>
//                     <td className='border-1 p-2'>{c.country}</td>
//                     <td className='border-1 p-2'>{c.population}</td>
//                     <td className='border-1 p-2'>{c.area}</td>
//                     <td className='border-1 p-2'>{c.official_language}</td>
//                     <td className='border-1 p-2'>{c.metro}</td>
//                 </tr>
//             })
//             setcityUI(city)
//         }) 
//     },[])
//   return (
//     <div className='m-20'>
//         <h1>Allcity</h1>
//       <table>
//         <thead>
//             <tr>
//                 <th className='border-1 p-2'>
//                  name
//                 </th>
//                 <th className='border-1 p-2'>
//                    state 
//                 </th>
//                 <th className='border-1 p-2'>
//                    country 
//                 </th>
//                 <th className='border-1 p-2'>
//                     population
//                 </th>
//                 <th className='border-1 p-2'>
//                     area
//                 </th>
//                 <th className='border-1 p-2'>
//                     official_language
//                 </th>
//                 <th className='border-1 p-2'>
//                     metro
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             {cityUI}
//         </tbody>
//       </table>
//     </div>
//   )
// }
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/apidetails';

export default function Allcity() {
  const [cityUI, setCityUI] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "city")
      .then((res) => {
        const city = res.data.city.map((c) => (
          <tr key={c._id} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{c.name}</td>
            <td className="px-4 py-2">{c.state}</td>
            <td className="px-4 py-2">{c.country}</td>
            <td className="px-4 py-2">{c.population}</td>
            <td className="px-4 py-2">{c.area}</td>
            <td className="px-4 py-2">{c.official_language}</td>
            <td className="px-4 py-2">{c.metro}</td>
          </tr>
        ));
        setCityUI(city);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">All Cities</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Country</th>
                <th className="px-4 py-2 text-left">Population</th>
                <th className="px-4 py-2 text-left">Area</th>
                <th className="px-4 py-2 text-left">Official Language</th>
                <th className="px-4 py-2 text-left">Metro</th>
              </tr>
            </thead>
            <tbody>
              {cityUI.length > 0 ? cityUI : (
                <tr>
                  <td colSpan="7" className="text-center px-4 py-4 text-gray-500">
                    No cities found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}