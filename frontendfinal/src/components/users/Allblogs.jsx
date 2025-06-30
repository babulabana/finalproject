
// // import React, { useEffect, useState } from 'react';
// // import { API_URL, API_URL2 } from '../../config/apidetails';
// // import axios from 'axios';

// // export default function Allblogs() {
// //     const [blogs, setBlogs] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const response = await axios.get(API_URL + "blogs");
// //                 setBlogs(response.data);
// //             } catch (error) {
// //                 console.error("Error fetching blogs:", error);
// //             }
// //         };
// //         fetchData();
// //     }, []);

// //     return (
// //         <div className="px-4 py-6 max-w-7xl mx-auto">
// //             <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //                 {blogs.map((blog, index) => (
// //                     <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
// //                         <img
// //                             src={API_URL2 + blog.imageUrl}
// //                             alt={blog.title}
// //                             className="w-full h-48 object-cover"
// //                         />
// //                         <div className="p-4">
// //                             <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
// //                             <p className="text-sm text-gray-500">{blog.category}</p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }
// import React, { useEffect, useState } from 'react';
// import { API_URL, API_URL2 } from '../../config/apidetails';
// import axios from 'axios';
// import Category from './Category'; // adjust path if needed
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';

// export default function Allblogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [allBlogs, setAllBlogs] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL + "blogs");
//         setBlogs(response.data);
//         setAllBlogs(response.data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCategory) {
//       setBlogs(allBlogs.filter(blog => blog.category === selectedCategory));
//     } else {
//       setBlogs(allBlogs);
//     }
//   }, [selectedCategory, allBlogs]);

//   let islogin = useSelector((s) => (s.admin.islogin))
//   let isulogin = useSelector((S) => S.user.islogin)
//   const navigate = useNavigate()
//   return (
//     <>
//     {islogin || isulogin ?
//     <div className=' bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 '>

//     <div className="px-4 py-6 max-w-7xl mx-auto  ">
//       <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>

//       {/* Category filter */}
//       <Category onSelectCategory={(category) => setSelectedCategory(category)} />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {blogs.length === 0 ? (
//           <div className="col-span-full text-center text-gray-500">
//             No blogs found.
//           </div>
//         ) : (
//           blogs.map((blog, index) => (
//             <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={API_URL2 + blog.imageUrl}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//                 <p className="text-sm text-gray-500">{blog.category}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//     </div>
//      :navigate("/")}
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import { API_URL, API_URL2 } from '../../config/apidetails';
import axios from 'axios';
import Category from './Category'; // adjust path if needed
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Allblogs() {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const isAdminLoggedIn = useSelector((state) => state.admin.islogin);
  const isUserLoggedIn = useSelector((state) => state.user.islogin);
  const user_id = useSelector((state) => state.user.user_id);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "blogs");
        setBlogs(response.data);
        setAllBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setBlogs(allBlogs.filter(blog => blog.category === selectedCategory));
    } else {
      setBlogs(allBlogs);
    }
  }, [selectedCategory, allBlogs]);

  if (!isAdminLoggedIn && !isUserLoggedIn) {
    navigate('/');
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">All Blogs</h1>

        {/* ✅ Show user_id */}
        {user_id && (
          <p className="text-center text-sm text-white mb-6">
            Logged in as user ID: <span className="font-semibold">{user_id}</span>
          </p>
        )}

        {/* Category filter */}
        <Category onSelectCategory={(category) => setSelectedCategory(category)} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {blogs.length === 0 ? (
            <div className="col-span-full text-center text-gray-200">
              No blogs found.
            </div>
          ) : (
            blogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={API_URL2 + blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-sm text-gray-500">{blog.category}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
