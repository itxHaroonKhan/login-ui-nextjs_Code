
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    Fullname: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formData.Password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (formData.Password !== formData.ConfirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/[!@#$%*&()_ ]/.test(formData.Password)) {
      setError("Password must contain at least one special character!");
      return;
    }
    if (!/[A-Z]/.test(formData.Password)) {
      setError("Password must contain at least one uppercase letter!");
      return;
    }

    setFormData({
      Fullname: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    });
    setError("");

    toast("Account created successfully ✅", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <div className="w-full max-w-sm bg-gray-900 p-8 rounded-2xl shadow-2xl border border-yellow-500">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h2>

        <div className="space-y-5">
          <label className="flex items-center border border-yellow-500 rounded-lg px-4 py-2 bg-gray-800 focus-within:border-yellow-300">
            <FaUser className="text-yellow-400" />
            <input
              type="text"
              name="Fullname"
              placeholder="Username"
              required
              className="w-full bg-transparent outline-none pl-3 text-white placeholder-gray-400"
              onChange={handleChange}
              value={formData.Fullname}
            />
          </label>

          <label className="flex items-center border border-yellow-500 rounded-lg px-4 py-2 bg-gray-800 focus-within:border-yellow-300">
            <FaEnvelope className="text-yellow-400" />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full bg-transparent outline-none pl-3 text-white placeholder-gray-400"
              onChange={handleChange}
              value={formData.Email}
              required
            />
          </label>

          <label className="flex items-center border border-yellow-500 rounded-lg px-4 py-2 bg-gray-800 focus-within:border-yellow-300">
            <FaLock className="text-yellow-400" />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="w-full bg-transparent outline-none pl-3 text-white placeholder-gray-400"
              required
              onChange={handleChange}
              value={formData.Password}
            />
          </label>

          <label className="flex items-center border border-yellow-500 rounded-lg px-4 py-2 bg-gray-800 focus-within:border-yellow-300">
            <FaLock className="text-yellow-400" />
            <input
              type="password"
              name="ConfirmPassword"
              required
              placeholder="Confirm Password"
              className="w-full bg-transparent outline-none pl-3 text-white placeholder-gray-400"
              onChange={handleChange}
              value={formData.ConfirmPassword}
            />
          </label>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition">
            Sign Up
          </button>

          <p className="text-center text-white mt-4">
            Already have an account?{" "}
            <Link href="/Login" className="text-yellow-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        <ToastContainer />
      </div>
    </form>
  );
};

export default Login;
