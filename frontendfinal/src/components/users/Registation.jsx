import axios from 'axios';
import React, { useRef, useState } from 'react';
import { API_URL } from '../../config/apidetails';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.fullname.trim()) {
      formErrors.fullname = 'Full name is required';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.contact.trim()) {
      formErrors.contact = 'Contact is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      formErrors.contact = 'Contact must be 10 digits';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(formData.password)) {
      formErrors.password = 'Password must contain letters and numbers';
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful");
      console.log(formData);
      // reset form or submit to API here
    }
  };

  const fullnameref = useRef();
  const emailref = useRef();
  const contactref = useRef();
  const passwordref = useRef();
  const add = ()=>{
    const data ={
      fullname:fullnameref.current.value,
      email:emailref.current.value,
      contact:contactref.current.value,
      password:passwordref.current.value,
    }
    axios.post(API_URL +"userr",data)
    .then((res)=>{
     console.log("registered")
    })
    .catch(()=>console.log("err"))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

        <div className="mb-4">
          <label className="block mb-1">Fullname</label>
          <input ref={fullnameref}
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input ref={emailref}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Contact</label>
          <input ref={contactref}
            type="text"
            name="contact"
            maxLength="10"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input ref={passwordref}
            type="password"
            name="password"
            maxLength="20"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            maxLength="20"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit" onClick={()=>add()}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
