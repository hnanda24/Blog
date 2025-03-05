import React from 'react';

export const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form action="/" className="flex flex-col">
          <label htmlFor="username" className="text-gray-600 mb-1">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="text-gray-600 mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="password" className="text-gray-600 mb-1">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            id="registerBtn"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
