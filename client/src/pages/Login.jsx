import React from "react";
import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("Every Field is required for login");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      alert(res.data.message);
      navigate('/happylogin')
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("An unexpected error occurred: " + err.message);
        console.error(err); // For debugging
      }
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">
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
            {/* forgot password and signup page link */}
          <div className="flex items-center justify-between">
            <Link to="/signup" className="text-white"><i>forgot password</i></Link>
            <Link to="/signup" className="text-white"><i>Create new account signup</i></Link>
          </div>
          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
