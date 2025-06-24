// src/components/ShowDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, API_URL2 } from '../../config/apidetails';
import axios from 'axios';

export default function Showdetails() {
  const { id } = useParams(); // get ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
                                       
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}blogs/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (!blog) {
    return <div className="text-center py-10 text-red-500">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
      <p className="text-sm text-gray-500 text-center mb-6">{blog.category}</p>
      <img
        src={API_URL2 + blog.imageUrl}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />
      <div className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
