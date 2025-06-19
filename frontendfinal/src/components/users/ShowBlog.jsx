import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function ShowBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <h2>All Blogs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              width: '250px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              backgroundColor: '#fff'
            }}
          >
            <img
              src={`${API_URL}${blog.image}`} // Ensure this path matches your backend
              alt={blog.title}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
            <h3 style={{ marginTop: '10px' }}>{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
