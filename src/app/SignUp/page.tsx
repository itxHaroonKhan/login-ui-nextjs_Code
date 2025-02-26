import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <form className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="w-full max-w-sm bg-gray-900 p-8 rounded-2xl shadow-2xl border border-yellow-500">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Login
        </h2>

        <div className="space-y-5">
          {/* Email */}
          <label className="flex items-center border border-yellow-500 rounded-lg px-4 py-2 bg-gray-800 focus-within:border-yellow-300">
            <FaEnvelope className="text-yellow-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none pl-3 text-white placeholder-yellow-400"
            />
          </label>

          {/* Password */}
          <label className="flex items-center border border-yellow-500 rounded-lg px-4 py-2 bg-gray-800 focus-within:border-yellow-300">
            <FaLock className="text-yellow-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none pl-3 text-white placeholder-yellow-400"
            />
          </label>

          {/* Login Button */}
          <button className="w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition">
            Login
          </button>

          {/* Don't have an account? */}
          <p className="text-center text-yellow-400 mt-4">
            Not a member? Join now!{" "}
            <Link href="/Login" className="text-yellow-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
