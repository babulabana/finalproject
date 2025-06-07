import axios from 'axios';
import React, { useRef } from 'react';
import { API_URL } from '../config/apidetails';

export default function Addproduct() {
  const nameref = useRef();
  const priceref = useRef();
  const titleref = useRef();
  const categoryref = useRef();
  const companyref = useRef();

  const add = () => {
    const data = {
      name: nameref.current.value,
      price: priceref.current.value,
      title: titleref.current.value,
      category: categoryref.current.value,
      company: companyref.current.value
    };

    axios.post(API_URL + "product", data)
      .then((res) => {
        alert(res.data.msg);
        nameref.current.value = "";
        priceref.current.value = "";
        titleref.current.value = "";
        categoryref.current.value = "";
        companyref.current.value = "";
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Product</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input type="text" ref={nameref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Price</label>
            <input type="number" ref={priceref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Title</label>
            <input type="text" ref={titleref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Category</label>
            <input type="text" ref={categoryref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Company</label>
            <input type="text" ref={companyref} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <button
            onClick={add}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
