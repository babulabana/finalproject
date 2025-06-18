import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apidetails';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Computer Science');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

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
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add blog. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Add New Blog</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={5}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
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
          onChange={(e) => setImage(e.target.files[0])}
          required
          style={{ marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Add Blog</button>
      </form>
    </div>
  );
}