// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../config/apidetails';

// export default function Category({ onSelectCategory }) {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(API_URL + 'blogs');
//         const allCategories = res.data.map(blog => blog.category);
//         const unique = Array.from(new Set(allCategories));
//         setCategories(unique);
//       } catch (err) {
//         console.error('Error fetching categories', err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <div className="mb-6 flex flex-wrap justify-center gap-3">
//       <button
//         onClick={() => onSelectCategory(null)}
//         className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
//       >
//         All
//       </button>
//       {categories.map((category, i) => (
//         <button
//           key={i}
//           onClick={() => onSelectCategory(category)}
//           className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200"
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }
// src/components/Category.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function Category({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // // ✅ Option A: Fetch categories from a dedicated API route
        // const res = await axios.get(`${API_URL}categories`);
        // setCategories(res.data);

        // ✅ Option B (Fallback): If no endpoint, extract from blogs
        const res = await axios.get(`${API_URL}blogs`);
        const allCategories = res.data.map(blog => blog.category);
        const unique = Array.from(new Set(allCategories));
        setCategories(unique);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-6 flex flex-wrap justify-center gap-3">
      <button
        onClick={() => onSelectCategory(null)}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
      >
        All
      </button>
      {categories.map((category, i) => (
        <button
          key={i}
          onClick={() => onSelectCategory(category)}
          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
