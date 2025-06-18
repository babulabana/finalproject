import axios from 'axios';
import React, { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const data = {
          fullname: formData.fullname,
          email: formData.email,
          contact: formData.contact,
          password: formData.password,
        };

        await axios.post(API_URL + "userr", data);
        alert("Registration Successful");

        // Clear form state
        setFormData({
          fullname: '',
          email: '',
          contact: '',
          password: '',
          confirmPassword: ''
        });
        setErrors({});

      } catch (error) {
        console.error("Registration error", error);
      }
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

        {[
          { label: "Fullname", name: "fullname", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Contact", name: "contact", type: "text", maxLength: 10 },
          { label: "Password", name: "password", type: "password", maxLength: 20 },
          { label: "Confirm Password", name: "confirmPassword", type: "password", maxLength: 20 },
        ].map(({ label, name, type, maxLength }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-1">{label}</label>
            <input type={type} name={name} maxLength={maxLength} value={formData[name]}
              onChange={handleChange} className="w-full p-2 border rounded"
            />
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
          </div>
        ))}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Register
        </button>
      </form>
    </div>
  );
}

