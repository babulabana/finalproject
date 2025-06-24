
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Computer Science');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const fileInputRef = useRef(); // <-- Ref for file input

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('image', image);

    try {
      const res = await axios.post(`${API_URL}blogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 201) {
        setMessage('✅ Blog added successfully!');
        setTitle('');
        setContent('');
        setCategory('Computer Science');
        setImage(null);
        fileInputRef.current.value = ''; // <-- Clear file input
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add blog. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Blog</h2>
      {message && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Computer Science">Computer Science</option>
          <option value="Astrology">Astrology</option>
          <option value="Cooking">Cooking</option>
          <option value="Music">Music</option>
          <option value="Politics">Politics</option>
        </select>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300 font-semibold"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
