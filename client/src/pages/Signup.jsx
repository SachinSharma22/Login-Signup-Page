import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  async function signupHandler(e) {
    e.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("every field is required");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      alert(res.data.message);
      navigate('/')
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
        console.error(err); // helpful for debugging
      }
    }
  }
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        <form onSubmit={signupHandler} className="space-y-5">
          {/* <!-- Name --> */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
              placeholder="Your name"
            />
          </div>

          {/* <!-- Email --> */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
              placeholder="you@example.com"
            />
          </div>

          {/* <!-- Password --> */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white"><i>Already have account login</i></Link>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 active:scale-95"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
