import axios from 'axios';
import React, { useRef } from 'react';
import { API_URL } from '../config/apidetails';

export default function Addcity() {
  let nameref = useRef();
  let stateref = useRef();
  let countryref = useRef();
  let populationref = useRef();
  let arearef = useRef();
  let languageRef = useRef();
  let metroref = useRef();

  const add = () => {
    let data = {
      name: nameref.current.value,
      state: stateref.current.value,
      country: countryref.current.value,
      population: populationref.current.value,
      area: arearef.current.value,
      official_language: languageRef.current.value,
      metro: metroref.current.value
    };
    axios.post(API_URL + "city", data)
      .then((d) => {
        alert(d.data.msg);
        nameref.current.value = "";
        stateref.current.value = "";
        countryref.current.value = "";
        populationref.current.value = "";
        arearef.current.value = "";
        languageRef.current.value = "";
        metroref.current.value = "";
      })
      .catch((err) => alert(err.msg || "Error adding city"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">Add City</h1>

        <div className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              ref={nameref}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">State</label>
            <input
              type="text"
              ref={stateref}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Country</label>
            <input
              type="text"
              ref={countryref}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Population</label>
            <input
              type="number"
              ref={populationref}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Area</label>
            <input
              type="number"
              ref={arearef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Official Language</label>
            <input
              type="text"
              ref={languageRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Metro</label>
            <input
              type="text"
              ref={metroref}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={add}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Add City
          </button>
        </div>
      </div>
    </div>
  );
}
