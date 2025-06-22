import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../config/apidetails'

export default function ShowBlog() {
    const [blogsUI,setblogsUI] = useState()
    const [blogs,setblogs] = useState([])

    axios.get(API_URL + "blog")
    .then((d)=>{
        let data = (d.data.blogs).map((u)=>
        {
            
        }
        )
    })
  return (
    <div>
      
    </div>
  )
}















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../config/apidetails';

// export default function ShowBlog() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${API_URL}blogs`);
//         setBlogs(res.data);
//       } catch (err) {
//         console.error('Error fetching blogs:', err);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
//       <h2>All Blogs</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             style={{
//               width: '250px',
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               padding: '10px',
//               backgroundColor: '#fff'
//             }}
//           >
//             <img
//               src={`${API_URL}${blog.image}`} // Ensure this path matches your backend
//               alt={blog.title}
//               style={{
//                 width: '100%',
//                 height: '150px',
//                 objectFit: 'cover',
//                 borderRadius: '4px'
//               }}
//             />
//             <h3 style={{ marginTop: '10px' }}>{blog.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
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

