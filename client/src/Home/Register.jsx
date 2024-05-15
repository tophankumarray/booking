import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../services/AxiosInstance';


const Register = () => {

  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const action = () => {
  setState(!state);
};

const handleSubmit = () => {
  const data = {
    name,
    email,
    password,
  };
  setLoading(true);
  axiosInstance
    .post("/auth/signup", data)
    .then(() => {
      setLoading(false);
      alert("Register successful");
      navigate("/");
    })
    .catch((err) => {
      setLoading(false);
      alert("invalid password or username");
      console.log(err);
    });
};


  return (
    <div className="h-screen w-full bg-gradient-to-r from-orange-400 to-red-400">
      <div className="mx-auto max-w-sm flex flex-col justify-center py-12 ">
        <h1 className="text-center text-2xl font-bold text-white">Register</h1>
        {loading ? "" : ""}
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Your Name..."
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Your Email..."
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              Password
            </label>
            <input
              type={state ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Your Password..."
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <div className="mt-2 text-blue-600 text-right">
            <a href="/">
              Don't have an account ? <span className="font-bold">SignIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register