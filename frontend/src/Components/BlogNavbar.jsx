import React from 'react';
import { Link } from 'react-router-dom';

const BlogNavbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/60/60736.png" 
          alt="Logo" 
          className="w-10 h-10"
        />
        <span className="text-xl font-bold text-gray-700">Blogger</span>
      </div>

      <div className="space-x-6">
        <Link to={'/'} className="text-gray-600 hover:text-blue-500 transition">Home</Link>
        <Link to={'/login'} className="text-gray-600 hover:text-blue-500 transition">Login</Link>
        <Link to={'/register'} className="text-gray-600 hover:text-blue-500 transition">Register</Link>
      </div>
    </nav>
  );
};

export default BlogNavbar;